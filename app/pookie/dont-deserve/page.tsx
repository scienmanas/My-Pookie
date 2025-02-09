"use client";

import { useEffect } from "react";
import fuckOffGif from "@/public/assets/animations/fuck-off.gif";
import Image from "next/image";

export default function DontDeserve() {
  useEffect(() => {
    // Heavy computation to slow down the browser
    const heavyComputation = () => {
      let result = 0;
      for (let i = 0; i < 1000000000000000; i++) {
        result += Math.sqrt(i) * Math.sin(i);
      }
      setTimeout(heavyComputation, 10000000); // Run continuously
    };
    // Hide cursor
    document.documentElement.style.cursor = "none";
    // Run heavy computation
    heavyComputation();
  }, []);

  return (
    <div className="DontDeserve w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-red-900 to-black text-red-500">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 animate-pulse text-center">
        You Don't Deserve Me! 💔
      </h1>
      <div className="w-fit h-fit relative">
        <Image
          unoptimized
          width={500}
          height={500}
          src={fuckOffGif}
          alt="fuck off"
          className="w-fit h-fit"
        />
      </div>
      <p className="mt-8 text-2xl font-semibold text-center">
        U can't see your mouse now... congrats 😈
      </p>
      <p className="mt-4 text-lg text-red-400">Your mouse is gone!</p>
    </div>
  );
}
