"use client";

import { useEffect } from "react";
import { Navbar } from "@/app/ui/landing/Navbar";
import { Hero } from "@/app/ui/landing/Hero";
import { Features } from "@/app/ui/landing/Features";
import { Donations } from "@/app/ui/landing/Donations";
import { Footer } from "@/app/ui/universal/Footer";
import { FallAnimation } from "@/app/ui/animations/fall-animation";

export default function Home() {
  // For rendering heart emoji
  useEffect(() => {
    FallAnimation({
      count: 100,
      delayDuration: 100,
      emoji: "♥",
    });
  }, []);

  return (
    <div className="w-full h-fit page-contents flex flex-col items-center justify-center gap-4">
      <section className="navbar w-full h-fit">
        <Navbar />
      </section>
      <section className="landing-body w-full h-fit flex flex-col items-center justify-center gap-4 mt-12">
        <Hero />
        <Features />
        <Donations />
      </section>
      <section className="footer z-10 w-full h-fit">
        <Footer />
      </section>
    </div>
  );
}
