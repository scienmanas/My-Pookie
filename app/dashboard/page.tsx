"use client";

import { PageLoader } from "@/app/ui/loaders";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/app/ui/dashboard/Navbar";
import { CreatePookiePage } from "@/app/ui/dashboard/CreatePookiePage";
import { PookiePagesList } from "@/app/ui/dashboard/PookiePagesList";
import { Donations } from "@/app/ui/universal/Donations";
import { Footer } from "@/app/ui/universal/Footer";
import { FallAnimation } from "@/app/ui/animations/fall-animation";
import { BackgroundMusicPlayer } from "@/app/ui/universal/Background-music-player";
import { PookiePageListContext } from "@/app/hooks/usePookiePageList";

// Define Pookie Page type
export interface PookiePageListTypes {
  id: string;
  name: string;
  linkName: string;
  visitCount: number;
  accepted: boolean;
  lastVisited: string;
  createdAt: string;
}

export default function DashboardPage() {
  const choose = Math.floor(Math.random() * 5);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [userData, setUserData] = useState<{
    name: string;
    email: string;
    profilePhoto: string;
  } | null>(null);
  const [pookiePageList, setPookiePageList] = useState<
    PookiePageListTypes[] | null
  >(null);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("/api/auth/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setUserData({
          name: data.name,
          email: data.email,
          profilePhoto: data.profilePic,
        });
        setMounted(true);
      } else {
        router.push("/auth");
      }
    };

    checkAuth();
  }, [router]);

  if (!mounted) return <PageLoader />;
  else
    return (
      <section className="w-full h-fit relative flex flex-col items-center justify-center gap-4">
        <FallAnimation count={40} delayDuration={100} emoji="♥" />
        <BackgroundMusicPlayer songId={choose} type="website" volume={0.3} />
        <Navbar
          profilePhoto={userData?.profilePhoto as string}
          email={userData?.email as string}
          name={userData?.name as string}
        />
        <PookiePageListContext.Provider
          value={{ pookiePageList, setPookiePageList }}
        >
          <CreatePookiePage />
          <PookiePagesList />
        </PookiePageListContext.Provider>
        <Donations />
        <Footer />
      </section>
    );
}
