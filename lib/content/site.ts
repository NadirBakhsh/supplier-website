/**
 * Site-wide constants: brand name, tagline, domain, and navigation.
 *
 * NOTE: SITE_URL is a placeholder production domain. Swap it for the real
 * domain once one is assigned — every canonical/OG/JSON-LD reference in the
 * app reads from this single constant.
 */

export const SITE_URL = "https://4supplier.com"

export const SITE_NAME = "4Supplier"

export const SITE_TAGLINE =
  "Manage Your Customers. Simplify Your Deliveries. Grow Your Business."

export const SITE_DESCRIPTION =
  "4Supplier is the supplier management app that brings your customers, orders, recurring deliveries, delivery team, and wallet into one simple mobile experience."

export const OPERATOR_NAME = "Nsians"

export const NAV_LINKS = [
  { label: "Problem", href: "/#problem" },
  { label: "Solution", href: "/#solution" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "FAQ", href: "/#faq" },
] as const

export const FOOTER_PRODUCT_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "See the App", href: "/#app-preview" },
  { label: "FAQ", href: "/#faq" },
  { label: "Download", href: "/#download" },
] as const

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-of-service" },
] as const
