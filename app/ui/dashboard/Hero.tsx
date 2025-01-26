"use client";

import { ReactTyped } from "react-typed";
import { useState } from "react";
import { firaSansFont } from "@/app/utils/fonts";

export function Hero({ name, email }: { name: string; email: string }) {
  const [isLoggingout, setIsLoggingout] = useState<boolean>(false);

  return (
    <section
      className={`w-full h-fit flex items-center justify-center ${firaSansFont.className}`}
    >
      <div className="wrapper w-full max-w-screen-xl h-fit flex flex-col gap-4 p-4 items-start">
        <div className="user-name text-neutral-700 w-fit h-fit text-2xl">
          Hi,{" "}
          <span className="font-semibold underline text-cyan-800 decoration-wavy decoration-yellow-600">
            <ReactTyped
              strings={[name]}
              loop={false}
              showCursor={false}
              typeSpeed={20}
            />
          </span>
        </div>
        <div className="description w-fit h-fit flex flex-col gap-2">
          <div className="user w-fit h-fit flex flex-col gap-2">
            <div className="user-info text-neutral-700 w-fit h-fit">
              Welcome back! 🎉 , you are logged in as{" "}
              <span className="underline text-cyan-800 font-semibold">
                {name}
              </span>{" "}
              with email{" "}
              <span className="underline text-green-700 font-semibold">
                {email}
              </span>
              . You can now access your dashboard and start creating your Pookie
              Pages, Again you are amazing person who wants to wish his/her
              friends and family with a unique way. To logout you can press the
              button below :
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
              className={`px-4 py-2 w-36 rounded-lg bg-[#1e40af] text-white font-semibold h-fit ${
                isLoggingout
                  ? "cursor-not-allowed opacity-60"
                  : "cursor-pointer"
              }`}
            >
              {isLoggingout ? "Logging out..." : "Logout"}
            </button>
            <div className="delete-text text-neutral-700">
              If at some point you want to delete your account, you can mail me
              at:{" "}
              <span className="text-cyan-800 underline font-semibold">
                iamscientistmanas@gmail.com
              </span>
              .
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
