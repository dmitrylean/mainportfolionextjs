import ServiceSection from "@/components/ServiceSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dmitry Lean | Projects",
};

export default function ProjectsPage() {
  return (
    <main>
      <ServiceSection />
    </main>
  );
}
