"use client";

import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProblemAreas from "@/components/sections/ProblemAreas";
import Tracks from "@/components/sections/Tracks";
import Timeline from "@/components/sections/Timeline";
import HowToParticipate from "@/components/sections/HowToParticipate";
import JudgingCriteria from "@/components/sections/JudgingCriteria";
import Submit from "@/components/sections/Submit";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <ProblemAreas />
      <Tracks />
      <Timeline />
      <HowToParticipate />
      <JudgingCriteria />
      <Submit />
      <FAQ />
      <Footer />
    </main>
  );
}
