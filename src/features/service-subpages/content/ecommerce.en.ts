import type { ServiceContent } from "../service-schema";

export const ecommerceEn: ServiceContent = {
  slug: "ecommerce",
  language: "en",
  meta: {
    title: "E-commerce Automation | Zyflows — Grow ROI and Sales",
    description:
      "Automations for online stores that grow sales, reduce abandonment, and streamline operations. Shopify, WooCommerce, custom. Free audit.",
  },
  hero: {
    h1: "E-commerce Automation — Grow Your ROI",
    subtitle: "Fewer abandoned carts, more repeat sales, less manual work",
    leadParagraph:
      "Running an online store isn't just uploading products. It's chasing abandoned carts, sending promo codes, handling returns, spotting at-risk customers. We build automations that do all of this automatically, on Shopify, WooCommerce, or any platform.",
  },
  whatItIs: {
    h2: "Why is e-commerce automation different?",
    body: "In e-commerce, response speed equals money. A customer who abandoned a cart 10 minutes ago and didn't get a reminder — lost forever. A customer who returns a product and doesn't get a response within an hour — won't be back. E-commerce automation is critical, not nice-to-have.",
    bullets: [
      "Response in seconds to key events (cart abandoned, return, bad review)",
      "Automatic customer segmentation by behavior for targeted campaigns",
      "Integration with Klaviyo, Mailchimp, Shopify, WooCommerce, invoicing, and more",
      "Adapted for stores in Hebrew, French, and English",
    ],
  },
  features: [
    {
      h2: "Abandoned cart recovery system",
      body: "70% of e-commerce carts are abandoned. We build a multi-stage reminder system — email, WhatsApp, and remarketing — that brings customers back to complete their purchase. Recovers 15-25% of carts on average.",
      bullets: [
        "First reminder within 1 hour",
        "Personalized discount code after 24 hours",
        "WhatsApp with product photo after 48 hours",
      ],
    },
    {
      h2: "Order management automation",
      body: "From the moment a customer buys until delivery — everything is automatic. Order confirmation, tracking updates, proactive email if the package is delayed, review request after delivery. The customer feels taken care of without your team doing anything.",
      bullets: [
        "Order status syncs automatically with the carrier",
        "Proactive email if tracking stalls for 3 days",
        "Review request X days after delivery",
      ],
    },
    {
      h2: "Customer service automation",
      body: "A chatbot that auto-answers recurring questions — \"where's my order\", \"how to return\", \"when does the promo end\". Connected to your order system, so answers are accurate for each customer.",
    },
    {
      h2: "Customer segmentation and personalized campaigns",
      body: "Automation identifies customers by behavior — VIP buyers, customers who haven't reordered, customers at churn risk — and sends each group the right offer at the right time.",
    },
  ],
  useCases: {
    heading: "Types of stores using automation",
    items: [
      {
        type: "Fashion store",
        problem: "70% of carts are abandoned and there's no system to recover them",
        solution: "3-stage recovery system that brings back 22% of carts on average",
      },
      {
        type: "Cosmetics store",
        problem: "Customers don't come back to buy a second time after their first order",
        solution: "Automation that detects usage frequency and sends a restock reminder exactly when needed",
      },
      {
        type: "Gift shop",
        problem: "Bad reviews without responses cause loss of trust",
        solution: "Bad-review detection system that alerts immediately and opens a discussion",
      },
    ],
  },
  whyZyflows: {
    h2: "Why choose Zyflows?",
    points: [
      "We work in 3 languages — Hebrew, French, English — no middleman",
      "Before proposing a solution, we run a deep audit to understand what you actually need",
      "You only pay for what you truly need. No fluff to inflate the bill",
    ],
  },
  cta: {
    primaryLabel: "Free Audit",
    secondaryLabel: "WhatsApp Direct",
    helperText:
      "Want to see how many abandoned carts you can recover in your business? Let's talk 30 minutes with real numbers.",
  },
};
