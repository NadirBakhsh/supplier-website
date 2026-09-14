/**
 * Central place for external links that aren't available yet.
 *
 * 4Supplier is not published to the App Store / Google Play yet, so both
 * URLs are `null`. `DownloadButtons` renders a "Coming soon" state whenever
 * a URL here is `null` — once the app ships, set the real URL below and the
 * buttons become live links with no other code changes required.
 */
export const APP_STORE_URL: string | null = null
export const PLAY_STORE_URL: string | null = null

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/nsians",
  facebook: "https://www.facebook.com/TheNsians/",
  instagram: "https://www.instagram.com/nsians",
  email: "mailto:hello@nsians.com",
} as const

export const CONTACT_EMAIL = "hello@nsians.com"
