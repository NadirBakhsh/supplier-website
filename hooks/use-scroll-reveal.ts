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

          // The `.feature-row` / `.problem-card` / `.solution-point` /
          // `.how-step` elements already start visually hidden via the
          // `opacity-0 translate-y-8` Tailwind classes baked into their
          // markup (present in both SSR and first client render), so we
          // don't need to (and must not) mutate their inline styles here —
          // doing so before hydration completes previously caused SSR/CSR
          // mismatches. GSAP only needs to animate them to their revealed
          // state on scroll.
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
