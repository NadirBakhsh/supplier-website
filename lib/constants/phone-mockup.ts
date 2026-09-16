export type PhoneMockupSize = "sm" | "md" | "lg"

// Native screen width the mockup is rendered at before being scaled to fit
// whatever width its parent actually provides.
export const NATIVE_SCREEN_WIDTH: Record<PhoneMockupSize, number> = {
  sm: 200,
  md: 260,
  lg: 300,
}

// Shared responsive sizing scale — the single source of truth for how big a
// given `size` variant should render at each breakpoint. PhoneMockup itself
// only ever fills whatever width its wrapper provides (see the
// ResizeObserver-driven scaling in phone-mockup.tsx), so every section that
// renders a mockup should pull its wrapper width from here instead of
// inventing its own one-off max-w/w values. This keeps `lg` visibly bigger
// than `md`, which is visibly bigger than `sm`, at every breakpoint, across
// the site.
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
