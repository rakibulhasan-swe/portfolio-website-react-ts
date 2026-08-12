import { useEffect, useRef } from 'react'

const HOVERABLE_SELECTOR =
  'a, button, .btn, .nav-toggle, .chip, .exp-item, .project-card, .journey-step, .ai-node'

/**
 * Drives the custom cursor dot + trailing ring, mirroring the original
 * vanilla-JS implementation. Skips itself entirely on touch devices and
 * when the person prefers reduced motion, matching the CSS media queries
 * in index.css that hide the cursor elements in those cases.
 */
export function useCustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const canHover = window.matchMedia('(pointer:fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reducedMotion) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let visible = false
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`
      if (!visible) {
        visible = true
        document.body.classList.remove('cursor-hidden')
      }
    }
    const onMouseLeave = () => document.body.classList.add('cursor-hidden')
    const onMouseDown = () => ring.classList.add('is-down')
    const onMouseUp = () => ring.classList.remove('is-down')

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest(HOVERABLE_SELECTOR)) ring.classList.add('is-hover')
    }
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest(HOVERABLE_SELECTOR)) ring.classList.remove('is-hover')
    }

    function tick() {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      if (ring) ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`
      rafId = requestAnimationFrame(tick)
    }
    tick()

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
    }
  }, [])

  return { dotRef, ringRef }
}
