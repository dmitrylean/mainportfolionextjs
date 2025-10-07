import HomeLayout from "@/layouts/HomeLayout";
import Home from "./home/page";

export const metadata = {
  title: "Dmitry Lean | Home",
};

export default function Page() {
  return (
    <HomeLayout>
      <Home />
    </HomeLayout>
  );
}
