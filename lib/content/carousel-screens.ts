export type CarouselScreen = {
  id: string
  label: string
  description: string
  screenshot: string
  alt: string
}

export const CAROUSEL_BADGE = "The App"
export const CAROUSEL_HEADLINE = "See the Supplier App in Action"
export const CAROUSEL_SUBHEADLINE =
  "Swipe through real screens from the supplier portal — the same one you'll use every day."

export const CAROUSEL_SCREENS: CarouselScreen[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    description: "Today's orders, delivered orders, active customers, and balance at a glance.",
    screenshot: "/screenshots/supplier/supplier-home-screen.png",
    alt: "4Supplier supplier dashboard home screen",
  },
  {
    id: "orders",
    label: "Orders",
    description: "One-time and recurring orders, filterable by status, with delivery details.",
    screenshot: "/screenshots/supplier/supplier-orders-screen.png",
    alt: "4Supplier orders screen with order list and filters",
  },
  {
    id: "customers",
    label: "Customers",
    description: "Every customer, their address, and their outstanding balance in one list.",
    screenshot: "/screenshots/supplier/supplier-customer-list-screen.png",
    alt: "4Supplier customer list screen",
  },
  {
    id: "customer-detail",
    label: "Customer Detail",
    description: "Total spent, orders, outstanding balance, deposit, and delivery locations.",
    screenshot: "/screenshots/supplier/supplier-customer-detail-screen.png",
    alt: "4Supplier customer detail screen",
  },
  {
    id: "products",
    label: "Products",
    description: "Your full product catalog with variants, ready to add to any order.",
    screenshot: "/screenshots/supplier/supplier-products-screen.png",
    alt: "4Supplier product catalog screen",
  },
  {
    id: "wallet",
    label: "Wallet",
    description: "Income, expense, and balance, with a full ledger of wallet activity.",
    screenshot: "/screenshots/supplier/supplier-wallet-screen.png",
    alt: "4Supplier wallet screen",
  },
  {
    id: "menu",
    label: "Menu",
    description: "Wallet, media gallery, categories, products, delivery team, and settings.",
    screenshot: "/screenshots/supplier/supplier-menu-screen.png",
    alt: "4Supplier supplier menu screen",
  },
]
