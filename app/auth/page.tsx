"use client";

// import { useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { firaSansFont } from "@/app/utils/fonts";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PageLoader } from "@/app/ui/loaders";
import backgroundImg from "@/public/assets/animations/auth-bg.gif";

export default function Auth() {
  const router = useRouter();
  const [mounted, setMounted] = useState<boolean>(false);

  async function handleAuthentication() {
    const googleAuthUrl = new URL(
      "https://accounts.google.com/o/oauth2/v2/auth"
    );

    googleAuthUrl.searchParams.set(
      "client_id",
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!
    );
    googleAuthUrl.searchParams.set(
      "redirect_uri",
      process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI!
    );
    googleAuthUrl.searchParams.set("response_type", "code");
    googleAuthUrl.searchParams.set("scope", "openid email profile");

    router.push(googleAuthUrl.toString());
  }

  // Check if the user is already authenticated
  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("/api/auth/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) router.push("/dashboard");
      else setMounted(true);
    };

    checkAuth();
  }, [router]);

  if (!mounted) return <PageLoader />;
  else
    return (
      <section className="auth w-dvw h-dvh flex items-center justify-center bg-transparent bg-gradient-to-br from-pink-600 to-neutral-300">
        <div className="google-auth-signin-button w-fit h-fit justify-center items-center relative">
          <div className="bg-animation absolute bottom-1/2 z-10">
            <Image
              src={backgroundImg}
              alt="bg"
              className="pointer-events-none select-none"
            />
          </div>
          <button
            onClick={handleAuthentication}
            type="button"
            className="flex flex-row relative z-20 items-center justify-center gap-3 w-[240px] py-4 border-2 rounded-lg border-pink-800 bg-neutral-200 duration-300 hover:bg-pink-100 backdrop-blur-sm bg-opacity-70 hover:bg-opacity-70 text-black"
          >
            <FcGoogle className="text-3xl" />
            <div className={`${firaSansFont.className} font-semibold text-xl`}>
              Google
            </div>
          </button>
        </div>
      </section>
    );
}
