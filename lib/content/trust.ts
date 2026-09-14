import type { LucideIcon } from "lucide-react"
import { ShieldCheck, Users2, Layers } from "lucide-react"

export type TrustPillar = {
  icon: LucideIcon
  title: string
  description: string
}

export const TRUST_BADGE = "Built for Suppliers"
export const TRUST_HEADLINE = "Built Around How Supplier Businesses Actually Work."
export const TRUST_SUBHEADLINE =
  "4Supplier is a new app, built directly from real supplier, delivery, and customer workflows — not a generic template."

export const TRUST_PILLARS: TrustPillar[] = [
  {
    icon: Layers,
    title: "Built on real supplier workflows",
    description:
      "Every screen is modeled on how supplier businesses actually manage customers, orders, and deliveries day to day.",
  },
  {
    icon: Users2,
    title: "Three connected roles",
    description:
      "Suppliers, their delivery team, and their customers each get a portal designed for their part of the workflow.",
  },
  {
    icon: ShieldCheck,
    title: "Your data stays yours",
    description:
      "Customer and delivery data is scoped to your supplier account — it's never visible to other businesses on the platform.",
  },
]

export const TRUST_PLACEHOLDER_NOTE =
  "We're onboarding our first suppliers. Real stories and results from suppliers using 4Supplier will appear here soon."
