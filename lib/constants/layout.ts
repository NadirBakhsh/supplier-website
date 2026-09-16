/**
 * Shared "one screen per section" sizing.
 *
 * Every top-level marketing section (badge + title + supporting line +
 * content/mockups) should fill at least the viewport height minus the
 * sticky header (`h-18 sm:h-20` in `components/layout/header.tsx`), so
 * landing on any section via scroll or an anchor link shows its full
 * badge-to-content composition without it being clipped by the fold.
 *
 * It's `min-h`, not a fixed `h-screen`: sections stay flex-centered when
 * their content is shorter than the viewport, but are free to grow taller
 * than the viewport when their content needs more room (e.g. Feature
 * Showcase, Solution, How It Works), instead of clipping or force-shrinking
 * it.
 *
 * Tailwind's build-time scanner needs the class names literally present in
 * source, so this is spelled out in full rather than built with string
 * interpolation — keep it in sync with the header's height classes above.
 */
export const SECTION_VIEWPORT_CLASS =
  "flex min-h-[calc(100vh-4.5rem)] flex-col justify-center sm:min-h-[calc(100vh-5rem)]"
