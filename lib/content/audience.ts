import type { LucideIcon } from "lucide-react"
import { Droplets, Milk, Flame, UtensilsCrossed, Package } from "lucide-react"

export type AudienceCategory = {
  icon: LucideIcon
  title: string
  description: string
}

export const AUDIENCE_BADGE = "Who Is This For"
export const AUDIENCE_HEADLINE = "Built for Supplier-to-Customer Delivery Businesses."
export const AUDIENCE_SUBHEADLINE =
  "4Supplier isn't built for one product — it's built for any business that sells and delivers to customers on a schedule or on demand."

export const AUDIENCE_CATEGORIES: AudienceCategory[] = [
  {
    icon: Droplets,
    title: "Bottled water suppliers",
    description: "Manage one-time refills and recurring bottle subscriptions for every customer.",
  },
  {
    icon: Milk,
    title: "Milk & dairy suppliers",
    description: "Handle daily recurring deliveries with predictable, repeatable schedules.",
  },
  {
    icon: Flame,
    title: "Gas cylinder suppliers",
    description: "Track cylinder orders, deliveries, and customer deposits in one place.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant & food delivery",
    description: "Manage orders and delivery assignment for a growing customer base.",
  },
  {
    icon: Package,
    title: "Any recurring delivery business",
    description: "The catalog, order, and delivery model is generic — your product can be anything.",
  },
]
