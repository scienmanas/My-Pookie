"use client";

import { PageLoader } from "@/app/ui/loaders";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

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
  else return <section className="bg-black text-white w-full h-screen">Hi {userData?.name}, This is still in development, please wait for some time, I love you very much.</section>;
}
