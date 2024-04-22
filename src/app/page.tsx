import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { About } from "@/components/widgets/about";
import { Service } from "@/components/widgets/service";
import { Testimonial } from "@/components/widgets/testimonial";
import { Work } from "@/components/widgets/work";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <About />
      <Work />
      <Service />
      <Testimonial />
      <Footer />
    </main>
  );
}
