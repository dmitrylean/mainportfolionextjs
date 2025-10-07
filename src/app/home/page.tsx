import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dmitry Lean | Home",
};

export default function HeroPage() {
  return <Hero />;
}
