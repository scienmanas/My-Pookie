"use client";

import Image from "next/image";
import { useState } from "react";
import logoImg from "@/public/logo/logo.png";
import { firaSansFont } from "@/app/utils/fonts";
import Link from "next/link";
import BMCsvg from "@/public/assets/donation/bmc.svg";
import { motion } from "framer-motion";
import { FaSortDown } from "react-icons/fa";

export function Navbar({
  name,
  email,
  profilePhoto,
}: {
  name: string;
  email: string;
  profilePhoto: string;
}) {
  const donationLink = {
    bmc: "https://www.buymeacoffee.com/scienmanas",
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoggingout, setIsLoggingout] = useState<boolean>(false);

  return (
    <nav className="w-full fixed top-0 z-30 h-fit flex items-center justify-center bg-white border border-neutral-200">
      <div className="wrapper w-full max-w-screen-xl h-fit p-2 flex flex-row items-center justify-between gap-4 flex-wrap">
        <div className="logo w-fit h-fit flex flex-row font-bold items-center">
          <Image src={logoImg} alt="img" height={50} />
          <div className={`text-lg ${firaSansFont.className}`}>My Pookie</div>
        </div>
        <div className="donation-profile-options flex flex-row gap-3 items-center">
          <Link href={donationLink.bmc}>
            <Image height={35} src={BMCsvg} alt="donate" />
          </Link>
          <div className="relative profile-photo w-fit h-fit group inline-block">
            <Image
              width={40}
              height={40}
              src={profilePhoto}
              alt="profile"
              className="rounded-full border border-neutral-300 cursor-pointer"
              onClick={() => setIsModalOpen(!isModalOpen)}
            />
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: isModalOpen ? 1 : 0,
                scale: isModalOpen ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "circInOut",
              }}
              className={`profile-user ${firaSansFont.className} absolute right-0 mt-2 w-36 bg-neutral-100 border border-[#e9e4e4] rounded-md shadow-lg p-2 flex flex-col gap-1`}
            >
              <FaSortDown className="w-fit h-fit text-[#e9e4e4] absolute -top-2 right-2 text-xl rotate-180 " />
              <div className="text-sm truncate">
                <span className="text-black font-semibold">Name</span>:{" "}
                <span className="text-blue-700 font-semibold">{name}</span>
              </div>
              <div className="text-sm truncate">
                <span className="text-black font-semibold">Email</span>:{" "}
                <span className="text-blue-700 font-semibold">{email}</span>
              </div>
              <button
                disabled={isLoggingout}
                onClick={async () => {
                  setIsLoggingout(true);
                  const response = await fetch("/api/auth/logout", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    credentials: "include",
                  });

                  if (response.status === 200) window.location.href = "/";
                  else setIsLoggingout(false);
                }}
                className={`px-[10px] py-[6px] text-xs rounded-lg bg-[#1e40af] text-white font-semibold h-fit ${
                  isLoggingout
                    ? "cursor-not-allowed opacity-60"
                    : "cursor-pointer"
                }`}
              >
                {isLoggingout ? "Logging out..." : "Logout"}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
}
