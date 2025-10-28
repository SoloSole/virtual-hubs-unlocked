import { Hero } from "@/components/landing/Hero";
import { USPStrip } from "@/components/landing/USPStrip";
import { Comparison } from "@/components/landing/Comparison";
import { Pricing } from "@/components/landing/Pricing";
import { Quiz } from "@/components/landing/Quiz";
import { FAQ } from "@/components/landing/FAQ";
import { Certificates } from "@/components/landing/Certificates";
import { Process } from "@/components/landing/Process";
import { Reviews } from "@/components/landing/Reviews";
import { About } from "@/components/landing/About";
import { SocialProof } from "@/components/landing/SocialProof";
import { MapSection } from "@/components/landing/MapSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-lato">
      <Hero />
      <USPStrip />
      <Comparison />
      <Pricing />
      <Quiz />
      <FAQ />
      <Certificates />
      <Process />
      <Reviews />
      <About />
      <SocialProof />
      <MapSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
