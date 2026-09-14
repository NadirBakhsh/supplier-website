"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  // gsap.registerPlugin is idempotent — safe to call once at module scope.
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Reveals the children of the returned ref one-by-one as they scroll into
 * view. Respects `prefers-reduced-motion` via `gsap.matchMedia()` — reduced
 * motion users get an instant, non-animated reveal.
 *
 * @param selector Selector (scoped to the container) for the items to reveal.
 */
export function useScrollReveal(selector: string) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      gsap.matchMedia().add(
        {
          motionOK: "(prefers-reduced-motion: no-preference)",
          motionReduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { motionOK } = context.conditions as { motionOK: boolean }
          const items = containerRef.current
            ? gsap.utils.toArray<HTMLElement>(selector, containerRef.current)
            : []

          if (!items.length) return

          if (!motionOK) {
            gsap.set(items, { opacity: 1, y: 0 })
            return
          }

          gsap.set(items, { opacity: 0, y: 32 })
          items.forEach((item) => {
            gsap.to(item, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            })
          })
        }
      )
    },
    { scope: containerRef }
  )

  return containerRef
}
