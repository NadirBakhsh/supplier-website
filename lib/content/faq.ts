export type FaqItem = {
  question: string
  answer: string
}

export const FAQ_BADGE = "FAQ"
export const FAQ_HEADLINE = "Frequently Asked Questions"

export const FAQS: FaqItem[] = [
  {
    question: "What is the 4Supplier app?",
    answer:
      "4Supplier is a supplier management app that helps businesses that sell and deliver physical goods — such as bottled water, milk, gas cylinders, or food — manage their customers, orders, recurring deliveries, delivery team, and cash wallet from one mobile app.",
  },
  {
    question: "How can the 4Supplier app help me manage customers?",
    answer:
      "You can add customers with their delivery locations, and view their order history, outstanding balance, and security deposits from a single customer profile — instead of scattered notes and spreadsheets.",
  },
  {
    question: "Can I manage my deliveries from the app?",
    answer:
      "Yes. Suppliers can assign, reassign, and track orders across their delivery team from the app, and delivery team members can view and complete their assigned deliveries from their own portal.",
  },
  {
    question: "Can I keep customer information in one place?",
    answer:
      "Yes. Every customer's contact details, delivery locations, order history, outstanding balance, and deposits are stored together and accessible in a few taps.",
  },
  {
    question: "How does the app handle recurring orders?",
    answer:
      "You can set up recurring deliveries for a customer with a schedule, and the app generates the corresponding orders automatically, so you don't have to recreate the same order manually.",
  },
  {
    question: "Can I track payments and outstanding amounts?",
    answer:
      "Yes. The wallet feature tracks income, expenses, and balance, including customer collections, security deposits, and cash handed over by your delivery team, so outstanding balances stay accurate without manual bookkeeping.",
  },
  {
    question: "How does the 4Supplier app help save time?",
    answer:
      "By replacing manual order tracking, scattered customer notes, and phone-call-based delivery coordination with a structured, single-app workflow for your daily supplier operations.",
  },
  {
    question: "Who can use the 4Supplier app?",
    answer:
      "Any supplier business that sells and delivers physical goods on a schedule or on demand — such as bottled water, milk, gas cylinders, or food/restaurant delivery — can use 4Supplier. The product catalog is fully configurable for your business.",
  },
  {
    question: "Is the 4Supplier app available on Android and iOS?",
    answer:
      "4Supplier is built for both Android and iOS. The app is not yet published to the App Store or Google Play — download links will appear on this page as soon as it launches.",
  },
]
