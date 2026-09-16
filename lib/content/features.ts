export type Feature = {
  label: string
  headline: string
  description: string
  benefits: string[]
  screenshot: string
  alt: string
}

export const FEATURES_BADGE = "Product Features"
export const FEATURES_HEADLINE = "Everything a Supplier Needs, Built In"
export const FEATURES_SUBHEADLINE =
  "Real screens from the 4Supplier app — built around how suppliers manage customers, orders, deliveries, and cash every day."

export const FEATURES: Feature[] = [
  {
    label: "Customer Management",
    headline: "Keep every customer organized in one place",
    description:
      "Store customer details, delivery locations, order history, outstanding balances, and security deposits — all in one customer profile.",
    benefits: [
      "Search and open any customer in seconds",
      "See total spent, orders, outstanding, and deposit at a glance",
      "Record collections and deposits without losing track",
    ],
    screenshot: "/screenshots/supplier/supplier-customer-detail-screen.png",
    alt: "4Supplier customer detail screen showing total spent, orders, outstanding balance, and deposit",
  },
  {
    label: "Order Management",
    headline: "Know what needs to be prepared, fulfilled, and delivered",
    description:
      "Create one-time orders or recurring deliveries from your product catalog, with quantities, pricing, and delivery time windows.",
    benefits: [
      "Filter orders by all, unassigned, pending, or completed",
      "Recurring orders are clearly labeled and tracked",
      "Every order shows its total amount and delivery address",
    ],
    screenshot: "/screenshots/supplier/supplier-orders-screen.png",
    alt: "4Supplier orders screen with filter tabs for all, unassigned, pending, and completed orders",
  },
  {
    label: "Delivery Management",
    headline: "Make your delivery workflow easier to manage",
    description:
      "Assign and reassign orders to your delivery team, and let them track their own pending and completed deliveries from their own portal.",
    benefits: [
      "Assign an order to a delivery team member in a tap",
      "Delivery team members see today's orders and delivery windows",
      "Track cash collected and handed over by each delivery member",
    ],
    screenshot: "/screenshots/delivery-person/delivery-person-orders-screen.png",
    alt: "4Supplier delivery person orders screen showing assigned deliveries",
  },
  {
    label: "Wallet & Due Management",
    headline: "Keep track of outstanding amounts without relying on memory",
    description:
      "A running wallet ledger tracks income, expenses, customer collections, deposits, and cash handed over by your delivery team.",
    benefits: [
      "See income, expense, and balance for any period",
      "Every wallet entry is tied to a customer, order, or delivery team member",
      "Outstanding balances update automatically as payments are collected",
    ],
    screenshot: "/screenshots/supplier/supplier-wallet-screen.png",
    alt: "4Supplier wallet screen showing income, expense, balance, and wallet activity",
  },
  {
    label: "Product Catalog",
    headline: "Build a catalog that fits any supplier business",
    description:
      "Organize products into categories with size and price variants — whether you sell bottled water, milk, gas cylinders, or meals.",
    benefits: [
      "Add products with multiple size or price variants",
      "Group products into categories for faster ordering",
      "Update pricing and availability as your catalog changes",
    ],
    screenshot: "/screenshots/supplier/supplier-products-screen.png",
    alt: "4Supplier product catalog screen showing products with size and price variants",
  },
]
