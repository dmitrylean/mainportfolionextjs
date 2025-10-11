import PageToggle from "@/components/PageToggle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dmitry Lean | Projects",
};

export default function ProjectsPage() {
  return (
    <main className="content">
      <div className="conteiner">
        <PageToggle />
      </div>
    </main>
  );
}
