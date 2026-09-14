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

// Native screen width the mockup is rendered at before being scaled to fit
// whatever width its parent actually provides.
const NATIVE_SCREEN_WIDTH: Record<NonNullable<PhoneMockupProps["size"]>, number> = {
  sm: 200,
  md: 260,
  lg: 300,
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
