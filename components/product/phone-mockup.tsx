import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type PhoneMockupProps = {
  children: ReactNode
  className?: string
  size?: "sm" | "md" | "lg"
}

const SIZE_CLASSES: Record<NonNullable<PhoneMockupProps["size"]>, string> = {
  sm: "max-w-[220px]",
  md: "max-w-[280px]",
  lg: "max-w-[320px]",
}

/**
 * Reusable phone device frame. Any screenshot / animated content can be
 * passed as `children` and will be clipped to the rounded screen area,
 * matching the ~390:844 aspect ratio of the app's real screenshots.
 */
export function PhoneMockup({ children, className, size = "md" }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[390/844] w-full",
        SIZE_CLASSES[size],
        className
      )}
    >
      <div className="absolute inset-0 rounded-[2.75rem] bg-neutral-900 p-2 shadow-2xl shadow-brand-900/20 ring-1 ring-black/10">
        <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] bg-white">
          {children}
        </div>
        <div
          aria-hidden="true"
          className="absolute top-2 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-neutral-900"
        />
      </div>
    </div>
  )
}
