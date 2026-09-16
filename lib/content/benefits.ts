import type { LucideIcon } from "lucide-react"
import { Clock, FolderKanban, Users, Truck, ShieldCheck, TrendingUp } from "lucide-react"

export type Benefit = {
  icon: LucideIcon
  title: string
  description: string
}

export const BENEFITS_BADGE = "Why 4Supplier"
export const BENEFITS_HEADLINE = "Built to Save You Time and Keep You Organized"

export const BENEFITS: Benefit[] = [
  {
    icon: Clock,
    title: "Save time",
    description: "Reduce the repetitive manual work of tracking orders, customers, and payments by hand.",
  },
  {
    icon: FolderKanban,
    title: "Stay organized",
    description: "Keep customer, order, and delivery information in one place instead of scattered notes.",
  },
  {
    icon: Users,
    title: "Manage customers better",
    description: "Access any customer's history, balance, and delivery locations in a few taps.",
  },
  {
    icon: Truck,
    title: "Simplify deliveries",
    description: "Assign and track deliveries across your team without back-and-forth calls and texts.",
  },
  {
    icon: ShieldCheck,
    title: "Reduce mistakes",
    description: "Replace scattered notes and manual tracking with a structured, consistent system.",
  },
  {
    icon: TrendingUp,
    title: "Grow with confidence",
    description: "A more organized operation makes it easier to take on more customers and deliveries.",
  },
]
