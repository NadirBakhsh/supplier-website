"use client"

import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { PhoneMockup } from "@/components/product/phone-mockup"

type Screen = {
  id: string
  screenshot: string
  alt: string
}

type ScreenshotCarouselProps = {
  screens: Screen[]
  activeIndex: number
  direction?: number
  size?: "sm" | "md" | "lg"
  className?: string
}

/**
 * Renders a single PhoneMockup whose screen content slides left/right
 * between screenshots as `activeIndex` changes, in the direction of
 * travel. Fully controlled — the parent (MobileScreenCarousel) owns the
 * active index, direction, and swipe/click logic.
 */
export function ScreenshotCarousel({
  screens,
  activeIndex,
  direction = 1,
  size = "lg",
  className,
}: ScreenshotCarouselProps) {
  const shouldReduceMotion = useReducedMotion()
  const active = screens[activeIndex]

  if (!active) return null

  return (
    <PhoneMockup size={size} className={className}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={active.id}
          custom={direction}
          initial={{ x: shouldReduceMotion ? 0 : `${direction * 100}%`, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: shouldReduceMotion ? 0 : `${direction * -100}%`, opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.35, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={active.screenshot}
            alt={active.alt}
            fill
            sizes="(max-width: 768px) 70vw, 320px"
            className="object-cover object-top"
          />
        </motion.div>
      </AnimatePresence>
    </PhoneMockup>
  )
}
