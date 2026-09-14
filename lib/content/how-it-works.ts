export type HowItWorksStep = {
  number: string
  title: string
  description: string
  screenshot: string
  alt: string
}

export const HOW_IT_WORKS_BADGE = "How It Works"
export const HOW_IT_WORKS_HEADLINE = "From Customer to Delivery, All in One App."

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: "01",
    title: "Add & Manage Customers",
    description:
      "Add customers with their delivery locations, and keep their order history, outstanding balance, and deposits organized and accessible.",
    screenshot: "/screenshots/supplier/supplier-customer-list-screen.png",
    alt: "4Supplier customer list screen showing customer names, addresses, and outstanding balances",
  },
  {
    number: "02",
    title: "Manage Orders",
    description:
      "Create one-time or recurring orders from your product catalog, and track every order from pending to completed.",
    screenshot: "/screenshots/supplier/supplier-orders-screen.png",
    alt: "4Supplier orders screen with order filters and order details",
  },
  {
    number: "03",
    title: "Manage Deliveries",
    description:
      "Assign orders to your delivery team, keep track of who's delivering what, and see delivery status update in real time.",
    screenshot: "/screenshots/delivery-person/delivery-person-home-screen.png",
    alt: "4Supplier delivery person home screen showing pending, delivered, and in-hand cash",
  },
  {
    number: "04",
    title: "Stay in Control",
    description:
      "Open your wallet to see income, expenses, and balance, and get a clear view of your day-to-day supplier operations.",
    screenshot: "/screenshots/supplier/supplier-wallet-screen.png",
    alt: "4Supplier wallet screen showing income, expense, and balance",
  },
]
