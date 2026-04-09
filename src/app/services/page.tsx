import type { Metadata } from "next";
import { BookingWizard } from "@/components/booking-wizard";

export const metadata: Metadata = {
  title: "Book",
  description: "Book Personal Training, Bootcamp, or Workout with me in one flow and pay at checkout.",
};

export default function ServicesPage() {
  return <BookingWizard />;
}
