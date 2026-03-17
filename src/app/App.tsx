import { Routes, Route } from "react-router-dom";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Features } from "@/app/components/Features";
import { Benefits } from "@/app/components/Benefits";
import { Pricing } from "@/app/components/Pricing";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { ScrollToTop } from "@/app/components/ScrollToTop";
import { RouteScrollToTop } from "@/app/components/RouteScrollToTop";
import { N8nPage } from "@/app/pages/N8n";
import { QaPage } from "@/app/pages/Qa";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <RouteScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/n8n" element={<N8nPage />} />
        <Route path="/qa" element={<QaPage />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}
