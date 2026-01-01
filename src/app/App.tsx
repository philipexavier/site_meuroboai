import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MetaPartner } from "./components/MetaPartner";
import { HowItWorks } from "./components/HowItWorks";
import { Benefits } from "./components/Benefits";
import { Solutions } from "./components/Solutions";
import { UseCases } from "./components/UseCases";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { ChatWidget } from "./components/ChatWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <MetaPartner />
        <HowItWorks />
        <Benefits />
        <Solutions />
        <UseCases />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}