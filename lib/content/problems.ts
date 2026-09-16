import type { LucideIcon } from "lucide-react"
import {
  Users,
  ClipboardList,
  Truck,
  BellOff,
  Wallet,
  Repeat,
  EyeOff,
  MessageSquareWarning,
} from "lucide-react"

export type Problem = {
  icon: LucideIcon
  title: string
  description: string
}

export const PROBLEM_BADGE = "The Challenge"
export const PROBLEM_HEADLINE =
  "Managing Customers and Deliveries\nShouldn't Be This Complicated"
export const PROBLEM_SUBHEADLINE =
  "As a supplier business grows, keeping track of customers, orders, and deliveries across notebooks, spreadsheets, and chat messages becomes harder every day."

export const PROBLEMS: Problem[] = [
  {
    icon: Users,
    title: "Customer information scattered",
    description:
      "Names, addresses, and balances spread across notebooks, chats, and memory instead of one organized place.",
  },
  {
    icon: ClipboardList,
    title: "Manual order tracking",
    description:
      "Writing down orders by hand makes it easy to miss items, mix up quantities, or lose track of what's pending.",
  },
  {
    icon: Truck,
    title: "Delivery coordination problems",
    description:
      "Assigning orders to your delivery team over calls and texts leaves no clear record of who's delivering what.",
  },
  {
    icon: Repeat,
    title: "Recurring orders fall through",
    description:
      "Subscriptions and repeat deliveries are hard to track manually — a missed day is easy to overlook until a customer complains.",
  },
  {
    icon: Wallet,
    title: "Outstanding balances are hard to track",
    description:
      "Without a running ledger, it's hard to know exactly who owes what, or which cash collections were handed over.",
  },
  {
    icon: EyeOff,
    title: "No visibility into daily operations",
    description:
      "Without a single dashboard, it's hard to see today's orders, deliveries, and cash position at a glance.",
  },
  {
    icon: BellOff,
    title: "Missing or delayed updates",
    description:
      "No shared system means order and delivery status updates get lost between the supplier, delivery team, and customer.",
  },
  {
    icon: MessageSquareWarning,
    title: "Communication breaks down as you grow",
    description:
      "The more customers and deliveries you manage, the harder it becomes to keep everyone on the same page manually.",
  },
]
