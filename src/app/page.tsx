import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ServicesIntro } from "@/components/sections/ServicesIntro";
import { Fleet } from "@/components/sections/Fleet";
import { MapSection } from "@/components/sections/Map";
import { Testimonials } from "@/components/sections/Testimonials";
import { QuoteWizard } from "@/components/form/QuoteWizard";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ServicesIntro />
      <Fleet />
      <MapSection />
      <Testimonials />
      <QuoteWizard />
      <FAQ />
    </>
  );
}
