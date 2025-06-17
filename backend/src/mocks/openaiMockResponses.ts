export const mockFunnelResponses: Record<string, any> = {
  "launch a course on productivity": {
    title: "Productivity Mastery Funnel",
    steps: [
      { step: "Landing Page", headline: "Double Your Productivity", cta: "Enroll Now" },
      { step: "Lead Magnet", offer: "Free PDF: 7 Hacks to Crush Procrastination" },
      { step: "Email Sequence", emails: ["Welcome", "Daily Tips", "Special Offer"] },
      { step: "Sales Page", product: "Productivity Mastery Course", price: "$199" },
    ],
  },

  "fitness funnel for beginners": {
    title: "Beginner’s Fitness Journey",
    steps: [
      { step: "Landing Page", headline: "Start Your Fitness Journey Today", cta: "Join Free Challenge" },
      { step: "Lead Magnet", offer: "5-Day Home Workout Plan (Free Download)" },
      { step: "Email Series", content: ["Day 1: Motivation", "Day 3: Nutrition", "Day 5: Offer"] },
      { step: "Sales Page", product: "Full 30-Day Fitness Program", price: "$49" },
    ],
  },

  "sell a skincare product": {
    title: "GlowUp Skincare Sales Funnel",
    steps: [
      { step: "Landing Page", headline: "Reveal Radiant Skin", cta: "Get Your Free Sample" },
      { step: "Tripwire Offer", product: "Mini Cleanser Kit", price: "$9.99" },
      { step: "Upsell", offer: "Full GlowUp Routine Kit", price: "$69.99" },
      { step: "Thank You Page", message: "Thanks! You’re glowing already ✨" },
    ],
  },

  "coaching funnel for business owners": {
    title: "6-Figure Strategy Funnel",
    steps: [
      { step: "Landing Page", headline: "Unlock 6-Figure Growth", cta: "Book Your Free Call" },
      { step: "Application Page", questions: ["Business Type", "Monthly Revenue", "Biggest Challenge"] },
      { step: "Email Nurture", emails: ["Free Resources", "Case Study", "Booking Reminder"] },
      { step: "Strategy Call", conversionGoal: "Sell 3-Month Coaching Package ($3,000)" },
    ],
  },

  "generate leads for real estate": {
    title: "Dream Homes Funnel",
    steps: [
      { step: "Landing Page", headline: "Find Your Perfect Home", cta: "Get Listings Instantly" },
      { step: "Lead Form", fields: ["Name", "Location", "Budget", "Home Type"] },
      { step: "Email Follow-up", emails: ["Hot Listings", "Price Drops", "Schedule a Tour"] },
      { step: "Appointment Page", goal: "Book Viewing with Agent" },
    ],
  },

  "promote a webinar for freelancers": {
    title: "Freelancer Success Webinar Funnel",
    steps: [
      { step: "Registration Page", headline: "Learn How to 2x Your Freelance Income", cta: "Register Now" },
      { step: "Confirmation Page", message: "You're In! Check Your Email" },
      { step: "Reminder Emails", sequence: ["1 Day Before", "1 Hour Before", "Replay Access"] },
      { step: "Post-Webinar Offer", product: "Freelance Mastery Bundle", price: "$149" },
    ],
  },

  "saas product sign up": {
    title: "SaaS Onboarding Funnel",
    steps: [
      { step: "Landing Page", headline: "Supercharge Your Workflow", cta: "Start Free Trial" },
      { step: "Signup Form", fields: ["Email", "Password", "Use Case"] },
      { step: "Onboarding Email Series", topics: ["Getting Started", "Advanced Features", "Case Study"] },
      { step: "Upsell Page", offer: "Annual Plan with 20% Off", price: "$199/year" },
    ],
  },

  "sell a digital ebook": {
    title: "Ebook Sales Funnel",
    steps: [
      { step: "Landing Page", headline: "Learn How to Build Wealth Early", cta: "Download Now" },
      { step: "Lead Magnet", offer: "Free Chapter Preview" },
      { step: "Sales Page", product: "Full Ebook: Wealth Blueprint", price: "$29" },
      { step: "Email Upsell", offer: "Companion Video Series", price: "$59" },
    ],
  },

  "online cooking course funnel": {
    title: "Chef at Home Funnel",
    steps: [
      { step: "Landing Page", headline: "Cook Gourmet Meals from Scratch", cta: "Watch Free Class" },
      { step: "Free Webinar", topics: ["Knife Skills", "Meal Planning", "Kitchen Hacks"] },
      { step: "Sales Page", offer: "Lifetime Access to Cooking Course", price: "$99" },
      { step: "Bonus Upsell", offer: "Printable Recipe Book", price: "$15" },
    ],
  },

  "nutrition coaching funnel": {
    title: "Custom Meal Plan Funnel",
    steps: [
      { step: "Landing Page", headline: "Get Your Personalized Meal Plan", cta: "Take the Quiz" },
      { step: "Quiz Funnel", fields: ["Goal", "Diet Type", "Activity Level"] },
      { step: "Offer Page", product: "1:1 Nutrition Coaching", price: "$120/month" },
      { step: "Email Series", topics: ["Healthy Recipes", "Client Transformations", "Q&A"] },
    ],
  },
};

export const fallbackFunnel = {
  title: "Default Funnel Template",
  steps: [
    { step: "Landing Page", headline: "Start Your Journey", cta: "Get Started" },
    { step: "Lead Magnet", offer: "Download Free Guide" },
    { step: "Email Sequence", emails: ["Intro", "Education", "Sales Pitch"] },
    { step: "Sales Page", product: "Main Offer", price: "$99" },
  ],
};
