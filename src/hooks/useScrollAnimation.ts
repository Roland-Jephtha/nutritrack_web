import { useEffect, useRef, useState } from 'react'

type Direction = 'up' | 'left' | 'right' | 'scale'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  direction?: Direction
  delay?: number
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.12,
    rootMargin = '0px 0px -60px 0px',
    direction = 'up',
  } = options

  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const hiddenClass = {
    up: 'anim-hidden',
    left: 'anim-hidden-left',
    right: 'anim-hidden-right',
    scale: 'anim-hidden-scale',
  }[direction]

  const visibleClass = {
    up: 'anim-visible',
    left: 'anim-visible-left',
    right: 'anim-visible-right',
    scale: 'anim-visible-scale',
  }[direction]

  return {
    ref: ref as React.RefObject<any>,
    className: isVisible ? visibleClass : hiddenClass,
    isVisible,
  }
}

// Stagger utility: returns a class with the right delay
export function staggerDelay(index: number, base = 75): string {
  const delays = [0, 75, 150, 225, 300, 375, 450, 525]
  const ms = delays[index] ?? index * base
  return `delay-${ms}`
}
