import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "School",
    description:
      "Comprehensive website and app solutions for educational institutions.",
    link: "https://stripe.com",
  },
  {
    title: "Hospital",
    description:
      "Tailored digital platforms for healthcare providers.",
    link: "https://netflix.com",
  },
  {
    title: "Hotel",
    description:
      " Advanced and visually appealing platforms for the hospitality sector.",
    link: "https://google.com",
  },
  {
    title: "Salon",
    description:
      "Sophisticated and modern solutions for beauty and grooming services.",
    link: "https://meta.com",
  },
  {
    title: "E-Commerce",
    description:
      "Intuitive, feature-rich online stores.",
    link: "https://amazon.com",
  },
  {
    title: "Gym",
    description:
      "Motivational and engaging digital platforms for fitness centers.",
    link: "https://microsoft.com",
  },
];
