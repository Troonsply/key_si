import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Skills } from "@/components/Skills/Skills";
import { Projects } from "@/components/Projects/Projects";
import { AISection } from "@/components/AISection/AISection";
import { BeyondCode } from "@/components/BeyondCode/BeyondCode";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="mx-auto max-w-[1440px] px-[clamp(20px,4.5vw,80px)]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AISection />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
