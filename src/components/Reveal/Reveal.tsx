import { createElement, type ElementType, type ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  className?: string
}

/** Wraps any block in the `.reveal` fade/rise-on-scroll treatment. */
export function Reveal({ children, as = 'div', className = '' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>()

  return createElement(
    as,
    { ref, className: `reveal ${visible ? 'visible' : ''} ${className}`.trim() },
    children,
  )
}
