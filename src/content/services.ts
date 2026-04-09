export type ServiceOption = {
  id: string;
  label: string;
  price: string;
  amountCents: number;
};

export type ServiceOffer = {
  id: string;
  name: string;
  summary: string;
  image: string;
  points: string[];
  options: ServiceOption[];
  featured?: boolean;
  note?: string;
};

export const serviceOffers: ServiceOffer[] = [
  {
    id: "personal-training",
    name: "Personal Training",
    summary: "Private coaching built for people who want strong structure, real accountability, and a routine that fits work and life.",
    image: "/transformations/photo-8.jpg",
    points: [
      "1:1 coaching tailored to your goals, schedule, and current fitness level",
      "Delivered across council-linked training locations or in your home setting",
      "Designed for sustainable progress, not short-term extremes",
    ],
    options: [
      { id: "personal-home", label: "At Home", price: "$149/session", amountCents: 14900 },
      { id: "personal-gym", label: "At the Gym", price: "$169/session", amountCents: 16900 },
    ],
    note: "Gym locations will be shared after booking confirmation.",
  },
  {
    id: "bootcamp",
    name: "Bootcamp",
    summary: "High-energy group-style coaching for people who want momentum, structure, and a stronger body in a focused block.",
    image: "/transformations/photo-1.jpg",
    points: [
      "Built to improve fitness, discipline, and confidence in a fixed timeframe",
      "Clear weekly structure with coaching, progression, and accountability",
      "Inclusive format for people who want challenge without confusion",
    ],
    options: [
      { id: "bootcamp-4-weeks", label: "4 Weeks", price: "$499/program", amountCents: 49900 },
      { id: "bootcamp-8-weeks", label: "8 Weeks", price: "$899/program", amountCents: 89900 },
    ],
    featured: true,
  },
  {
    id: "workout-with-me",
    name: "Work Out With Me",
    summary: "A more personal training experience where you move with me, learn live, and build consistency through shared sessions.",
    image: "/transformations/photo-3.jpg",
    points: [
      "Train alongside Satya with real-time coaching and direct feedback",
      "Perfect for people who feel more motivated when they are not training alone",
      "Built to make fitness feel approachable, energising, and consistent",
    ],
    options: [
      {
        id: "workout-suggested-gym",
        label: "At my suggested Gym",
        price: "$119/session",
        amountCents: 11900,
      },
      {
        id: "workout-your-regular-gym",
        label: "At your regular gym",
        price: "$139/session",
        amountCents: 13900,
      },
    ],
  },
];

export function findBookableOption(serviceId: string, optionId: string) {
  const service = serviceOffers.find((item) => item.id === serviceId);
  if (!service) return null;

  const option = service.options.find((item) => item.id === optionId);
  if (!option) return null;

  return { service, option };
}
