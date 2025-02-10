"use client";

import { FallAnimation } from "@/app/ui/animations/fall-animation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { pangolinFont, emilysCandyFont, firaSansFont } from "@/app/utils/fonts";
import { SubmissionLoader } from "@/app/ui/loaders";
import { FaWhatsapp } from "react-icons/fa";
import { TextArea } from "@/app/ui/components/TextArea";

//  Gifs
import askGif0 from "@/public/assets/pookie/ask/0.gif";
import askGif1 from "@/public/assets/pookie/ask/1.gif";
import askGif2 from "@/public/assets/pookie/ask/2.gif";
import askGif3 from "@/public/assets/pookie/ask/3.gif";
import askGif4 from "@/public/assets/pookie/ask/4.gif";
import acceptedGif from "@/public/assets/pookie/ask/accepted.gif";

export function Ask({
  id,
  day,
  type,
  confessionLine,
  number,
  userId,
}: {
  id: string;
  type: string;
  day: string;
  confessionLine: string;
  number: number | null | undefined;
  userId: string;
}) {
  const router = useRouter();
  const [noCount, setNoCount] = useState(0);
  const [askText, setAskText] = useState(
    confessionLine || "Will you be my Valentine?"
  );
  const [emojiAsk, setEmojiAsk] = useState("💗");
  const [accepted, setAccepted] = useState(false);
  const [Gif, setGif] = useState<StaticImageData>(askGif0);
  const [isSendingDetails, setIsSendingDetails] = useState<boolean>(false);
  const [isSendingSuccessful, setIsSendingSuccessful] = useState(false);

  // Get emoji based on day
  const dayEmojis: { [key: string]: string } = {
    rose_day: "🌹",
    propose_day: "💍",
    chocolate_day: "🍫",
    teddy_day: "🧸",
    promise_day: "🤝",
    hug_day: "🤗",
    kiss_day: "💋",
    valentine_day: "❤️",
    birthday: "🥳",
    aniversary: "💖",
  };

  const handleYesClick = async () => {
    setAccepted(true);
    if (type === "prank") {
      setAskText("It's a prank... Let's meet! 😂");
      setEmojiAsk("😜");
    } else if (day === "birthday") {
      setAskText(
        "Happy Birthday! You are 1.3 billion reasons to celebrate—let's make today unforgettable!"
      );
      setEmojiAsk("🥳");
    } else if (day === "aniversary") {
      setAskText(
        "Happy Anniversary! Every moment with you feels like 1.3 billion heartbeats of love—let's cherish us!"
      );
      setEmojiAsk("💖");
    } else {
      const acceptedTexts: { [key: string]: string } = {
        rose_day: "Yay! Let me get you the prettiest roses!",
        propose_day: "You've made me the happiest person!",
        chocolate_day: "Sweet! Let's share some chocolates!",
        teddy_day: "Time for the biggest teddy bear hug!",
        promise_day: "I promise to keep this promise forever!",
        hug_day: "Come here for the warmest hug!",
        kiss_day: "My heart skips a beat!",
        valentine_day: "Yayy.. let's meet!",
      };
      setAskText(acceptedTexts[day] || "Yayy.. let's meet!");
      setEmojiAsk("🥰");
    }
    setGif(acceptedGif);

    // Now update the database
    try {
      await fetch("/api/page/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSendingDetails(true);
    const formData = new FormData(e.currentTarget);
    const date = formData.get("date");
    const time = formData.get("time");
    const place = formData.get("place");
    const message = formData.get("message");

    try {
      const response = await fetch("/api/page/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: date,
          time: time,
          place: place,
          userId: userId,
          message: message,
        }),
      });

      if (response.status === 200) setIsSendingSuccessful(true);
    } catch (error) {
      alert("Something went wrong! Please try again.");
    } finally {
      setIsSendingDetails(false);
    }
  };

  // Change text according to button click
  useEffect(() => {
    if (noCount === 1) {
      setAskText("Please don't say no?");
      setEmojiAsk("😢");
      setGif(askGif1);
    }
    if (noCount === 2) {
      setAskText("Please don't say no again?");
      setEmojiAsk("😭");
      setGif(askGif2);
    }
    if (noCount === 3) {
      setAskText("This is your last chance!");
      setEmojiAsk("💔");
      setGif(askGif3);
    }
    if (noCount === 4) {
      setAskText("Bye, you don't deserve me.");
      setEmojiAsk("😤");
      setGif(askGif4);
    }
  }, [noCount]);

  // Manage redirect dont-deserve page
  useEffect(() => {
    if (noCount >= 4) {
      router.push("/pookie/dont-deserve");
    }
  }, [noCount, router]);

  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center bg-gradient-to-tr from-[#F56217] to-[#0B486B] relative overflow-hidden">
      <FallAnimation
        count={40}
        delayDuration={500}
        emoji={dayEmojis[day] || "❤️"}
      />
      <div className="animation-gif w-fit h-fit p-6">
        <Image
          unoptimized
          src={Gif}
          alt="Ask"
          className="select-none pointer-events-none w-[180px] sm:w-[200px] md:w-[390px] h-fit"
        />
      </div>
      <div className="z-10 flex flex-col items-center gap-4 px-4">
        <p
          className={`text-lg md:text-xl lg:text-2xl text-center max-w-[44rem] text-white ${pangolinFont.className}`}
        >
          In a world brimming with over 3.95 billion extraordinary souls, you
          stand out to me as exceptionally beautiful and charming.
        </p>

        <div className="flex flex-col items-center gap-2">
          <h2
            className={`text-lg sm:text-xl md:text-2xl text-center text-white ${emilysCandyFont.className}`}
          >
            {askText} <span>{emojiAsk}</span>
          </h2>

          {!accepted ? (
            <div
              className={`flex gap-8 font-semibold ${firaSansFont.className}`}
            >
              {noCount >= 4 ? null : (
                <button
                  className="px-8 py-3 text-xl bg-gradient-to-tr from-[#3a6186] to-[#89253e] text-white rounded-xl border-2 shadow-xl shadow-pink-500 -rotate-12 hover:scale-105 duration-200 active:scale-95"
                  onClick={handleYesClick}
                >
                  Yes
                </button>
              )}
              <motion.button
                animate={{
                  y: noCount >= 4 ? 1000 : 0,
                }}
                whileFocus={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{ duration: 1 }}
                className="px-8 py-3 text-xl bg-gradient-to-tr from-[#3a6186] to-[#89253e] text-white rounded-xl border-2 shadow-xl shadow-pink-500"
                onClick={() => setNoCount(noCount + 1)}
              >
                No
              </motion.button>
            </div>
          ) : (
            <div className="backdrop-blur-sm p-4 rounded-xl w-[300px] sm:w-[400px]">
              <form
                onSubmit={handleSubmit}
                className={`${firaSansFont.className} space-y-4`}
              >
                <div className="flex gap-2">
                  <div className="flex-1">
                    <input
                      disabled={isSendingDetails || isSendingSuccessful}
                      placeholder="📅 Date ?"
                      type="date"
                      name="date"
                      required
                      className="w-full p-2 text-sm text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      disabled={isSendingDetails || isSendingSuccessful}
                      placeholder="⏰ Time ?"
                      type="time"
                      name="time"
                      required
                      className="w-full p-2 text-sm text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="place"
                    placeholder="Where should we meet?"
                    required
                    className="w-full text-sm text-black p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="message-box w-full h-fit">
                  <textarea
                    required
                    minLength={2}
                    name="message"
                    id="message"
                    className="w-full h-16 text-sm p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Any special message?"
                  ></textarea>
                </div>
                <div className="buttons w-full h-fit flex flex-col gap-2">
                  <button
                    disabled={isSendingDetails || isSendingSuccessful}
                    type="submit"
                    className={`w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-tr from-[#3a6186] to-[#89253e] border-none ${
                      isSendingDetails || isSendingSuccessful
                        ? "cursor-not-allowed opacity-60"
                        : ""
                    }`}
                  >
                    {isSendingSuccessful ? (
                      "Details Sent! 💕"
                    ) : isSendingDetails ? (
                      <div className="w-full h-fit flex flex-row items-center justify-center gap-2">
                        <span>Sending</span>
                        <SubmissionLoader color="pink" height={20} width={20} />
                      </div>
                    ) : (
                      "Send Details ✨"
                    )}
                  </button>
                  {number !== 0 && number && (
                    <Link
                      href={`https://wa.me/${number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 rounded-lg text-white font-semibold flex items-center justify-center gap-1 bg-green-600 hover:bg-green-700 transition-colors"
                    >
                      <span>
                        <FaWhatsapp />
                      </span>
                      Chat 💝
                    </Link>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
