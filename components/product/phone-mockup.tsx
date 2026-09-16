"use client"

import { type ReactNode, useLayoutEffect, useRef, useState } from "react"
import { BatteryFull, Wifi } from "lucide-react"
import { IPhoneMockup } from "react-device-mockup"
import { cn } from "@/lib/utils"

type PhoneMockupProps = {
  children: ReactNode
  className?: string
  size?: "sm" | "md" | "lg"
}

export type PhoneMockupSize = NonNullable<PhoneMockupProps["size"]>

// Native screen width the mockup is rendered at before being scaled to fit
// whatever width its parent actually provides.
const NATIVE_SCREEN_WIDTH: Record<PhoneMockupSize, number> = {
  sm: 200,
  md: 260,
  lg: 300,
}

// Shared responsive sizing scale — the single source of truth for how big a
// given `size` variant should render at each breakpoint. PhoneMockup itself
// only ever fills whatever width its wrapper provides (see the
// ResizeObserver-driven scaling below), so every section that renders a
// mockup should pull its wrapper width from here instead of inventing its
// own one-off max-w/w values. This keeps `lg` visibly bigger than `md`,
// which is visibly bigger than `sm`, at every breakpoint, across the site.
//
// Rendered width target per breakpoint (px): base / sm / md / lg / xl / 2xl
//   sm: 144 / 160 / 176 / 192 / 208 / 224
//   md: 200 / 224 / 248 / 272 / 296 / 320
//   lg: 256 / 288 / 320 / 352 / 384 / 416
//
// Tailwind's build-time scanner needs the full class name literally present
// in source, so these are spelled out in full rather than built with string
// interpolation.
export const PHONE_MOCKUP_WIDTH: Record<PhoneMockupSize, string> = {
  sm: "w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 2xl:w-56",
  md: "w-50 sm:w-56 md:w-62 lg:w-68 xl:w-74 2xl:w-80",
  lg: "w-64 sm:w-72 md:w-80 lg:w-88 xl:w-96 2xl:w-104",
}

export const PHONE_MOCKUP_MAX_WIDTH: Record<PhoneMockupSize, string> = {
  sm: "max-w-36 sm:max-w-40 md:max-w-44 lg:max-w-48 xl:max-w-52 2xl:max-w-56",
  md: "max-w-50 sm:max-w-56 md:max-w-62 lg:max-w-68 xl:max-w-74 2xl:max-w-80",
  lg: "max-w-64 sm:max-w-72 md:max-w-80 lg:max-w-88 xl:max-w-96 2xl:max-w-104",
}

// Values below are tuned against a 390px-wide iPhone screen, then scaled to
// whatever native width this mockup renders at.
function StatusBar({ screenWidth }: { screenWidth: number }) {
  const ratio = screenWidth / 390

  return (
    <div
      className="flex shrink-0 items-center justify-between bg-white text-neutral-900"
      style={{
        height: Math.round(59 * ratio),
        paddingLeft: Math.round(24 * ratio),
        paddingRight: Math.round(24 * ratio),
        fontSize: Math.round(15 * ratio),
        fontWeight: 600,
      }}
    >
      <span>9:41</span>
      <div className="flex items-center" style={{ gap: Math.round(4 * ratio) }}>
        <Wifi style={{ width: Math.round(15 * ratio), height: Math.round(15 * ratio) }} />
        <BatteryFull style={{ width: Math.round(22 * ratio), height: Math.round(15 * ratio) }} />
      </div>
    </div>
  )
}

/**
 * Reusable iOS phone device frame, built on `react-device-mockup`'s
 * `IPhoneMockup`. Any screenshot / animated content can be passed as
 * `children` and will be clipped to the rounded screen area. The frame
 * renders at a fixed native resolution then is scaled (via CSS transform)
 * to fluidly fill whatever width its parent provides.
 */
export function PhoneMockup({ children, className, size = "md" }: PhoneMockupProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const [metrics, setMetrics] = useState({ scale: 1, height: 0 })

  useLayoutEffect(() => {
    const container = containerRef.current
    const frame = frameRef.current
    if (!container || !frame) return

    const measure = () => {
      const frameWidth = frame.offsetWidth
      const frameHeight = frame.offsetHeight
      if (!frameWidth) return
      const scale = container.offsetWidth / frameWidth
      setMetrics({ scale, height: frameHeight * scale })
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(container)
    return () => observer.disconnect()
  }, [size])

  return (
    <div
      ref={containerRef}
      className={cn("relative mx-auto aspect-9/19.5 w-full overflow-hidden", className)}
      style={metrics.height ? { height: metrics.height } : undefined}
    >
      <div
        ref={frameRef}
        className="absolute top-0 left-0"
        style={{ transform: `scale(${metrics.scale})`, transformOrigin: "top left" }}
      >
        <IPhoneMockup
          screenWidth={NATIVE_SCREEN_WIDTH[size]}
          screenType="island"
          frameColor="#171717"
          statusbarColor="#ffffff"
          hideStatusBar
        >
          <div className="relative flex h-full w-full flex-col overflow-hidden bg-white">
            <StatusBar screenWidth={NATIVE_SCREEN_WIDTH[size]} />
            <div className="relative min-h-0 flex-1 overflow-hidden">{children}</div>
          </div>
        </IPhoneMockup>
      </div>
    </div>
  )
}
