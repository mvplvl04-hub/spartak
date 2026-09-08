'use client'

import { useEffect, useRef, useState } from 'react'
import type { HTMLAttributes, ReactNode } from 'react'

type RevealProps = Omit<HTMLAttributes<HTMLElement>, 'className' | 'style'> & {
  children: ReactNode
  className?: string
  /** delay in ms before the element animates in */
  delay?: number
  /** wrapper element tag, defaults to div */
  as?: 'div' | 'section' | 'li'
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // respect reduced-motion: show immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      // Same trigger point as the reference: fires as soon as a sliver of the
      // element is genuinely on screen, so the fade is visible during the scroll
      // itself rather than finishing before you get there.
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Tag = as

  return (
    <Tag
      ref={ref as never}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}
