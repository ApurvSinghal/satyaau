export const siteConfig = {
  brandName: "Satya Fitness",
  tagline:
    "Helping busy professionals get lean, strong, and disciplined with simple, sustainable routines.",
  instagramUrl: "https://instagram.com/satyafitness",
  contactEmail: "coach@satyafitness.com",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/satyafitness/fitness-consultation?hide_gdpr_banner=1",
  forms: {
    leadMagnet:
      process.env.NEXT_PUBLIC_LEAD_FORM_ACTION ||
      "https://formspree.io/f/your-leadmagnet-id",
    contactApply:
      process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION ||
      "https://formspree.io/f/your-contact-id",
    bookingApply:
      process.env.NEXT_PUBLIC_BOOKING_FORM_ACTION ||
      "https://formspree.io/f/your-booking-id",
  },
};
