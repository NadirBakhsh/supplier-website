"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin)
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function headerOffset() {
  const bar = document.querySelector<HTMLElement>("[data-header-bar]")
  return (bar?.getBoundingClientRect().height ?? 80) + 8
}

function scrollToTarget(
  target: number | HTMLElement,
  options: { url?: string; focus?: boolean } = {}
) {
  const offsetY = typeof target === "number" ? 0 : headerOffset()
  const y =
    typeof target === "number"
      ? target
      : target.getBoundingClientRect().top + window.scrollY - offsetY
  const distance = Math.abs(window.scrollY - y)

  if (options.url) {
    const current = `${window.location.pathname}${window.location.hash}`
    if (current !== options.url) {
      history.pushState(null, "", options.url)
    }
  }

  const focusTarget = () => {
    if (!options.focus || !(target instanceof HTMLElement)) return
    if (!target.hasAttribute("tabindex")) {
      target.setAttribute("tabindex", "-1")
    }
    target.focus({ preventScroll: true })
  }

  if (prefersReducedMotion() || distance < 4) {
    window.scrollTo(0, y)
    focusTarget()
    return
  }

  gsap.to(window, {
    duration: gsap.utils.clamp(0.45, 1.1, distance / 1700),
    ease: "power3.inOut",
    overwrite: true,
    scrollTo: { y, autoKill: true },
    onComplete: focusTarget,
  })
}

function parseInPageHash(href: string, currentPath: string) {
  const url = new URL(href, window.location.origin)
  if (url.origin !== window.location.origin) return null

  const hash = url.hash.slice(1)
  const samePage = url.pathname === currentPath

  return { hash, samePage, pathname: url.pathname }
}

export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return

    const frame = window.requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el) scrollToTarget(el)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const anchor = (event.target as HTMLElement | null)?.closest("a")
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href) return

      const parsed = parseInPageHash(href, pathname)
      if (!parsed) return

      if (parsed.hash) {
        if (!parsed.samePage) return
        const el = document.getElementById(parsed.hash)
        if (!el) return
        event.preventDefault()
        scrollToTarget(el, {
          url: `${parsed.pathname}#${parsed.hash}`,
          focus: true,
        })
        return
      }

      if (parsed.samePage && parsed.pathname === "/") {
        event.preventDefault()
        scrollToTarget(0, { url: parsed.pathname })
      }
    }

    document.addEventListener("click", onClick, true)
    return () => {
      document.removeEventListener("click", onClick, true)
      gsap.killTweensOf(window)
    }
  }, [pathname])

  return null
}
