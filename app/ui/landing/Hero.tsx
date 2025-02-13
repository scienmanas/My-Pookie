"use client";

import Link from "next/link";
import { pangolinFont, chewyFont, firaSansFont } from "@/app/utils/fonts";

export function Hero() {
  return (
    <section className={`hero w-full h-fit flex items-center justify-center `}>
      <div className="wrapper w-full max-w-screen-xl flex items-center justify-center gap-4 flex-wrap p-4">
        <div className="heading-and-description w-full h-fit flex flex-col gap-4">
          <div
            className={`heading-text text-black w-fit h-fit text-2xl font-semibold underline ${chewyFont.className}`}
          >
            My Pookie{" "}
          </div>
          <div className={`w-fit h-fit ${pangolinFont.className}`}>
            <p className="text-neutral-600 text-base">
              Ever wanted to wish your pookie💕 a Teddy Day, Kiss Day, or even
              Valentine’s Day in the cutest way possible? But oh no, you had no
              idea how? 😢 Don’t worry, my snugglebug! 🤗💞 I’ve got you
              covered!
            </p>
          </div>
          <div className="getting-started-buttons w-fit flex flex-row flex-wrap gap-4 items-start">
            <Link
              href={"/dashboard"}
              className={`px-4 py-2 rounded-lg bg-[#1e40af] text-white font-semibold ${firaSansFont.className}`}
            >
              Get started
            </Link>
          </div>
          <div
            className={`extra-recomendation text-black ${firaSansFont.className}`}
          >
            Need extra personal touch, contact me, I can help you with that!.
            Mail me at:{" "}
            <span className="underline font-semibold text-cyan-600">
              <Link href={"mailto:iamscientistmanas@gmail.com"}>iamscientistmanas@gmail.com</Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
