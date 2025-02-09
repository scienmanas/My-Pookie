"use client";

import { Navbar } from "@/app/ui/landing/Navbar";
import { Hero } from "@/app/ui/landing/Hero";
import { Features } from "@/app/ui/landing/Features";
import { TermsAndPolicy } from "@/app/ui/landing/TermsAndPolicy";
import { Donations } from "@/app/ui/universal/Donations";
import { Footer } from "@/app/ui/universal/Footer";
import { FallAnimation } from "@/app/ui/animations/fall-animation";
import { BackgroundMusicPlayer } from "@/app/ui/universal/Background-music-player";

export default function Home() {
  const choose = Math.floor(Math.random() * 5);

  return (
    <div className="w-full h-fit page-contents flex flex-col items-center justify-center gap-4">
      <FallAnimation count={50} delayDuration={100} emoji="♥" />
      <BackgroundMusicPlayer songId={choose} type="website" volume={0.3} />
      <section className="navbar w-full h-fit">
        <Navbar />
      </section>
      <section className="landing-body w-full h-fit flex flex-col items-center justify-center gap-4 mt-12">
        <Hero />
        <Features />
        <TermsAndPolicy />
        <Donations />
      </section>
      <section className="footer z-10 w-full h-fit">
        <Footer />
      </section>
    </div>
  );
}
