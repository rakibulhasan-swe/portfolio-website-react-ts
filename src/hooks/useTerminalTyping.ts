import { useEffect, useState } from 'react'
import type { TerminalLine } from '../data/terminalSequence'

interface RenderedLine {
  type: 'cmd' | 'out'
  text: string
  done: boolean
}

/**
 * Types out a sequence of terminal commands/outputs one character at a
 * time, matching the original terminal effect. When the person prefers
 * reduced motion, renders every line instantly instead of animating.
 */
export function useTerminalTyping(sequence: TerminalLine[]) {
  const [lines, setLines] = useState<RenderedLine[]>([])
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setLines(sequence.map((s) => ({ ...s, done: true })))
      setFinished(true)
      return
    }

    let cancelled = false
    const timeouts: ReturnType<typeof setTimeout>[] = []

    async function run() {
      for (const item of sequence) {
        if (cancelled) return

        if (item.type === 'cmd') {
          setLines((prev) => [...prev, { type: 'cmd', text: '', done: false }])
          await typeInto(item.text, 35, (partial) => {
            if (cancelled) return
            setLines((prev) => {
              const next = [...prev]
              next[next.length - 1] = { type: 'cmd', text: partial, done: false }
              return next
            })
          })
          setLines((prev) => {
            const next = [...prev]
            next[next.length - 1] = { ...next[next.length - 1], done: true }
            return next
          })
          await wait(250, timeouts)
        } else {
          setLines((prev) => [...prev, { type: 'out', text: item.text, done: true }])
          await wait(400, timeouts)
        }
      }
      if (!cancelled) setFinished(true)
    }

    run()

    return () => {
      cancelled = true
      timeouts.forEach(clearTimeout)
    }
  }, [sequence])

  return { lines, finished }
}

function wait(ms: number, bag: ReturnType<typeof setTimeout>[]) {
  return new Promise<void>((resolve) => {
    const id = setTimeout(resolve, ms)
    bag.push(id)
  })
}

function typeInto(text: string, speed: number, onUpdate: (partial: string) => void) {
  return new Promise<void>((resolve) => {
    let i = 0
    const step = () => {
      onUpdate(text.slice(0, i))
      i++
      if (i <= text.length) {
        setTimeout(step, speed)
      } else {
        resolve()
      }
    }
    step()
  })
}
