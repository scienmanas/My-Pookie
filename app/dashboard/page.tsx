"use client";

import { PageLoader } from "@/app/ui/loaders";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/app/ui/dashboard/Navbar";
import { Hero } from "@/app/ui/dashboard/Hero";
import { CreatePookiePage } from "@/app/ui/dashboard/CreatePookiePage";
import { PookiePagesList } from "@/app/ui/dashboard/PookiePagesList";
import { Donations } from "@/app/ui/universal/Donations";
import { Footer } from "@/app/ui/universal/Footer";
import { FallAnimation } from "@/app/ui/animations/fall-animation";

export default function DashboardPage() {
  const router = useRouter();

  const [mounted, setMounted] = useState<boolean>(false);
  const [userData, setUserData] = useState<null | {
    name: string;
    email: string;
    profilePhoto: string;
  }>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("/api/auth/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.status === 200) {
        const data = await response.json();
        setUserData({
          name: data.name,
          email: data.email,
          profilePhoto: data.profilePic,
        });
        setMounted(true);
      } else router.push("/auth");
    };

    checkAuth();
  }, [router]);

  if (!mounted) return <PageLoader />;
  else
    return (
      <section className="w-full h-fit flex flex-col items-center justify-center gap-4">
        <FallAnimation count={70} delayDuration={100} emoji="♥" />
        <Navbar profilePhoto={userData?.profilePhoto as string} />
        <div className="body-contents w-full h-fit flex flex-col items-center justify-center gap-4 mt-20">
          <Hero
            name={userData?.name as string}
            email={userData!.email as string}
          />
          <CreatePookiePage />
          <PookiePagesList />
          <Donations />
        </div>
        <Footer />
      </section>
    );
}
