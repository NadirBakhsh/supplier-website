import type { ReactNode } from "react"
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants/links"
import { cn } from "@/lib/utils"

function AppleIcon() {
  return (
    <svg viewBox="0 0 384 512" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26-2 49.7-15.2 69.5-34.3z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 512 512" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M99.6 8.32a29.5 29.5 0 0 0-27.5-2 29.6 29.6 0 0 0-15.7 27.1v445.2a29.6 29.6 0 0 0 15.7 27.1 29.5 29.5 0 0 0 27.5-2l257.9-214.6-257.9-214.6z" />
      <path d="M414.8 244.3 343.4 210l-72.4 72.4 72.4 72.4 71.4-34.3a29.2 29.2 0 0 0 0-52.9z" opacity=".55" />
      <path d="M343.4 210 99.6 8.32c-1.6-1.2-3.3-2.1-5-2.9l176.4 176.4 72.4-72.4z" opacity=".8" />
      <path d="M270.99 282.4 71 481.3c1.6 1.2 3.3 2.1 5 2.9l267.4-129.2-72.41-72.6z" opacity=".65" />
    </svg>
  )
}

type StoreButtonProps = {
  href: string | null
  icon: ReactNode
  eyebrow: string
  label: string
  tone: "light" | "dark"
}

function StoreButton({ href, icon, eyebrow, label, tone }: StoreButtonProps) {
  const isDisabled = !href

  const classes = cn(
    "group flex items-center gap-3 rounded-xl border px-4 py-2.5 transition-colors",
    tone === "dark"
      ? "border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
      : "border-border bg-background text-foreground hover:border-brand-300 hover:bg-brand-50",
    isDisabled && "cursor-not-allowed opacity-70 hover:bg-transparent hover:border-inherit"
  )

  const content = (
    <>
      {icon}
      <span className="flex flex-col items-start leading-tight">
        <span
          className={cn(
            "text-[10px] uppercase tracking-wide",
            tone === "dark" ? "text-white/60" : "text-muted-foreground"
          )}
        >
          {eyebrow}
        </span>
        <span className="text-sm font-semibold">{label}</span>
      </span>
    </>
  )

  if (isDisabled) {
    return (
      <span className={classes} aria-disabled="true" role="button" tabIndex={-1}>
        {content}
        <span
          className={cn(
            "ml-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
            tone === "dark" ? "bg-white/15 text-white/80" : "bg-muted text-muted-foreground"
          )}
        >
          Soon
        </span>
      </span>
    )
  }

  return (
    <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  )
}

type DownloadButtonsProps = {
  tone?: "light" | "dark"
  className?: string
}

export function DownloadButtons({ tone = "light", className }: DownloadButtonsProps) {
  return (
    <div id="download" className={cn("flex flex-wrap items-center gap-3", className)}>
      <StoreButton
        href={APP_STORE_URL}
        icon={<AppleIcon />}
        eyebrow="Download on the"
        label="App Store"
        tone={tone}
      />
      <StoreButton
        href={PLAY_STORE_URL}
        icon={<PlayIcon />}
        eyebrow="Get it on"
        label="Google Play"
        tone={tone}
      />
    </div>
  )
}
