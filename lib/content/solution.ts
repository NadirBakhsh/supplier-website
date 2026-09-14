import type { LucideIcon } from "lucide-react"
import { Users, Package, Truck, Wallet, LayoutDashboard, Zap } from "lucide-react"

export type SolutionPoint = {
  icon: LucideIcon
  title: string
  description: string
}

export const SOLUTION_BADGE = "The Solution"
export const SOLUTION_HEADLINE = "One App to Run Your Supplier Operations."
export const SOLUTION_SUBHEADLINE =
  "4Supplier brings customer management, order management, delivery assignment, and your wallet into a single mobile app — built around how supplier businesses actually work."

export const SOLUTION_POINTS: SolutionPoint[] = [
  {
    icon: Users,
    title: "Customer management",
    description:
      "Every customer profile, delivery location, outstanding balance, and security deposit — organized and searchable.",
  },
  {
    icon: Package,
    title: "Order management",
    description:
      "Create one-time orders or recurring deliveries from your product catalog, and track every order's status.",
  },
  {
    icon: Truck,
    title: "Delivery management",
    description:
      "Assign, reassign, and track orders across your delivery team, with real-time status updates as deliveries complete.",
  },
  {
    icon: Wallet,
    title: "Wallet & collections",
    description:
      "Track income, expenses, and balance in one wallet, including cash collections and handovers from your delivery team.",
  },
  {
    icon: LayoutDashboard,
    title: "Business visibility",
    description:
      "See today's orders, delivered orders, active customers, and balance the moment you open the app.",
  },
  {
    icon: Zap,
    title: "Faster daily operations",
    description:
      "Replace manual notes and scattered calls with a structured workflow built for daily supplier operations.",
  },
]
