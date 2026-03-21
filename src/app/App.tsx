import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Features } from "@/app/components/Features";
import { FacturadorFeatures } from "@/app/components/FacturadorFeatures";
import { Benefits } from "@/app/components/Benefits";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { ScrollToTop } from "@/app/components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <FacturadorFeatures />
      <Benefits />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
