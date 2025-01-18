"use client";

import Image from "next/image";
import { useState } from "react";
import logoImg from "@/public/logo/logo.png";
import { firaSansFont } from "@/app/utils/fonts";
import { FaGooglePay } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import Link from "next/link";
import BMCsvg from "@/public/assets/donation/bmc.svg";
import upiImage from "@/public/assets/donation/upi.png";
import { motion } from "framer-motion";

export function Navbar() {
  const donationLink = {
    solana:
      "https://solscan.io/account/E3FrcftDnb1FXDpRBA96ja7vQmWnQ8mTk85i7m85FmhD",
    bmc: "https://www.buymeacoffee.com/scienmanas",
  };

  const [gpay, setGpay] = useState<boolean>(false);

  return (
    <nav className="w-full h-fit flex items-center justify-center bg-white bg-opacity-75 backdrop-blur-sm">
      <div className="absolute top-0 left-0 w-full h-dvh flex flex-col items-center justify-center">
        <motion.div className="container-wrapper flex flex-col items-center justify-center">
          <div className="image-qr">
            <Image width={400} src={upiImage} alt="upi" />
          </div>
          <div className="message-cute"></div>
        </motion.div>
      </div>
      <div className="wrapper w-full max-w-screen-xl h-fit p-2 flex flex-row items-center justify-between gap-4 flex-wrap">
        <div className="logo w-fit h-fit flex flex-row font-bold items-center">
          <Image src={logoImg} alt="img" height={50} />
          <div className={`text ${firaSansFont.className}`}>My Pookie</div>
        </div>
        <div className="donation-options flex flex-row gap-3 items-center">
          <button type="button">
            <FaGooglePay className="text-black text-5xl" />
          </button>
          <Link href={donationLink.solana}>
            <SiSolana />
          </Link>
          <Link href={donationLink.bmc}>
            <Image height={35} src={BMCsvg} alt="donate" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
