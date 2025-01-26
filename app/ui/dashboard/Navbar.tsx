"use client";

import Image from "next/image";
import { useState } from "react";
import logoImg from "@/public/logo/logo.png";
import { firaSansFont } from "@/app/utils/fonts";
import Link from "next/link";
import BMCsvg from "@/public/assets/donation/bmc.svg";
import upiImage from "@/public/assets/donation/upi.png";
import { motion } from "framer-motion";
import { FaGooglePay } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";
import { loveYaLikeASister } from "@/app/utils/fonts";

export function Navbar({ profilePhoto }: { profilePhoto: string }) {
  const donationLink = {
    bmc: "https://www.buymeacoffee.com/scienmanas",
  };

  const [gpay, setGpay] = useState<boolean>(false);

  return (
    <nav className="w-full fixed top-0 z-20 h-fit flex items-center justify-center bg-white border border-neutral-200">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: gpay ? 1 : 0,
          scale: gpay ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full h-dvh flex flex-col items-center justify-center backdrop-blur-sm bg-neutral-300 bg-opacity-35"
        aria-modal="true"
        role="dialog"
        aria-label="Support with GPay"
      >
        <button
          onClick={() => {
            setGpay(false);
            document.body.style.overflowY = "auto";
          }}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close dialog"
        >
          <GiCrossedSwords className="text-red-800 text-2xl" />
        </button>
        <div className="container-wrapper flex flex-col items-center justify-center p-4 w-fit h-fit">
          <div className="image-qr">
            <Image width={400} src={upiImage} alt="upi" />
          </div>
          <div
            className={`message-cute ${loveYaLikeASister.className} text-pink-800 text-center w-fit h-fit`}
          >
            Oh sure, admire all you want—support? Just a tiny detail! No big
            deal, baby! 😏❤️
          </div>
        </div>
      </motion.div>
      <div className="wrapper w-full max-w-screen-xl h-fit p-2 flex flex-row items-center justify-between gap-4 flex-wrap">
        <div className="logo w-fit h-fit flex flex-row font-bold items-center">
          <Image src={logoImg} alt="img" height={50} />
          <div className={`text-lg ${firaSansFont.className}`}>My Pookie</div>
        </div>
        <div className="donation-profile-options flex flex-row gap-3 items-center">
          <button
            onClick={() => {
              setGpay(!gpay);
              document.body.style.overflowY = "hidden";
            }}
            type="button"
          >
            <FaGooglePay className="text-black text-5xl" />
          </button>
          <Link href={donationLink.bmc}>
            <Image height={35} src={BMCsvg} alt="donate" />
          </Link>
          <div className="profile-photo w-fit h-fit">
            <Image
              width={40}
              height={40}
              src={profilePhoto}
              alt="profile"
              className="rounded-full border border-neutral-300"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
