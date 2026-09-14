export type HeroFloatingCard = {
  label: string
  value: string
  sublabel: string
  tone?: "outstanding" | "positive"
}

export const HERO_CONTENT: {
  eyebrow: string
  headline: string
  subheadline: string
  primaryCta: string
  secondaryCta: string
  secondaryCtaHref: string
  floatingCards: HeroFloatingCard[]
} = {
  eyebrow: "Supplier Management App",
  headline: "Manage Your Customers. Simplify Your Deliveries. Grow Your Business.",
  subheadline:
    "4Supplier gives suppliers one place to manage customers, orders, recurring deliveries, your delivery team, and your wallet — instead of scattered notes, spreadsheets, and phone calls.",
  primaryCta: "Download the App",
  secondaryCta: "See How It Works",
  secondaryCtaHref: "#how-it-works",
  floatingCards: [
    {
      label: "Today's Orders",
      value: "12",
      sublabel: "3 pending assignment",
    },
    {
      label: "Outstanding",
      value: "Rs 4,250",
      sublabel: "Across 6 customers",
      tone: "outstanding",
    },
    {
      label: "Wallet Balance",
      value: "Rs 18,300",
      sublabel: "This month",
      tone: "positive",
    },
  ],
}
