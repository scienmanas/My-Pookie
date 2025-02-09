"use client";

import { PageLoader } from "@/app/ui/loaders";
import { useState, useEffect, use } from "react";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundMusicPlayer } from "@/app/ui/universal/Background-music-player";
import { Landing } from "@/app/ui/pookie/Landing";
import { Ask } from "@/app/ui/pookie/Ask";

// All Pics
import pic1 from "@/public/assets/pookie/landing/1.png";
import pic2 from "@/public/assets/pookie/landing/2.png";
import pic3 from "@/public/assets/pookie/landing/3.png";
import pic4 from "@/public/assets/pookie/landing/4.png";
import pic5 from "@/public/assets/pookie/landing/5.png";
import { StaticImageData } from "next/image";

type PookiePageProps = {
  params: Promise<{ slug: string }>; // params is now a Promise
};

export default function PookiePage({ params }: PookiePageProps) {
  const { slug } = use(params); // Unwrap the promise

  // State
  const [mounted, setMounted] = useState(false);
  const [fetchSuccess, setFetchSuccess] = useState(false);
  const [pageSpecification, setPageSpecification] = useState<null | {
    id: string;
    userName: string;
    name: string;
    type: string;
    day: string;
    landingPickupLine: string;
    confessionLine: string;
    songId: number;
    number: number;
  }>(null);
  const [pageNo, setPageNo] = useState<number>(0);

  // for maintaining randomness
  const images = [pic1, pic2, pic3, pic4, pic5];
  // Pic a random chpice
  const choice = Math.floor(Math.random() * 5);

  // Fetch the page
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch("/api/page/view", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ linkName: slug }),
        });

        if (response.status === 200) {
          const data = await response.json();
          document.title = data.page.name;
          setPageSpecification(data.page);
          setFetchSuccess(true);
        } else {
          setFetchSuccess(false);
          document.title = "404 - Not Found";
        }
      } catch (error) {
        console.log(error);
        setFetchSuccess(false);
        document.title = "404 - Not Found";
      } finally {
        setMounted(true);
      }
    };
    fetchPage();
  }, []);

  if (!mounted) return <PageLoader />;
  else if (mounted && !fetchSuccess) return notFound();
  else
    return (
      <div className="w-dvw h-dvh bg-neutral-800">
        <BackgroundMusicPlayer
          songId={pageSpecification?.songId as number}
          type="pookie"
          volume={0.2}
        />
        <BackgroundImageHandler
          choice={choice}
          images={images}
          pageNo={pageNo}
        />
        <motion.div
          initial={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="horiontal-scroll-container w-dvw h-dvh"
        >
          <AnimatePresence mode="wait">
            {pageNo === 0 ? (
              <motion.div
                key="landing"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <Landing
                  userName={pageSpecification?.userName as string}
                  landingPickupLine={
                    pageSpecification?.landingPickupLine as string
                  }
                  name={pageSpecification?.name as string}
                  setPageNo={setPageNo}
                />
              </motion.div>
            ) : (
              <motion.div
                key="ask"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <Ask
                  id={pageSpecification?.id as string}
                  name={pageSpecification?.name as string}
                  day={pageSpecification?.day as string}
                  type={pageSpecification?.type as string}
                  confessionLine={pageSpecification?.confessionLine as string}
                  number={pageSpecification?.number}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    );
}

function BackgroundImageHandler({
  choice,
  images,
  pageNo,
}: {
  choice: number;
  images: StaticImageData[];
  pageNo: number;
}) {
  return (
    <AnimatePresence mode="wait">
      {pageNo === 0 && (
        <motion.div
          key="background"
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-neutral-800"
          style={{ backgroundImage: `url(${images[choice].src})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      )}
    </AnimatePresence>
  );
}
