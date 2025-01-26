"use client";

import { firaSansFont } from "@/app/utils/fonts";
import React, { useState } from "react";
import { Input } from "@/app/ui/components/Input";
import { toast, ToastContainer } from "react-toastify";

export function CreatePookiePage() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  async function handleFormSubmission(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
  }

  return (
    <section
      className={`w-full h-fit flex items-center justify-center ${firaSansFont.className}`}
    >
      <ToastContainer />
      <div className="wrapper w-full max-w-screen-xl h-fit flex flex-col gap-4 items-start p-4">
        <div className="heading font-semibold text-2xl underline">
          Create Pookie Page
        </div>
        <div className="body-contents w-fit h-fit flex flex-col gap-2">
          <div className="description">
            It is very simple and intuitive to create a Pookie Page for your
            Pookie. Just follow your instinct fill the from, click submit and
            you will see the magic happening all by itself.
          </div>
          <div className="form w-fit h-fit flex flex-col gap-2">
            <form
              onSubmit={handleFormSubmission}
              className="w-fit h-fit flex flex-col gap-2 relative"
            >
              <div className="form-contents w-fit h-fit flex flex-col gap-2 relative">
                <div className="name relative">
                  <Input
                    fieldName="Name"
                    placeholder="name"
                    name="name"
                    isRefreshing={isRefreshing}
                    isSubmitting={isSubmitting}
                  />
                </div>
                <div className="type-and-day"></div>
                <div className="landing-pickup-line"></div>
                <div className="cheezyPickupLine"></div>
                <div className="select-song"></div>
                <div className="contact-number-whatsapp"></div>
              </div>
              <div className="buttons flex flex-row gap-2 flex-wrap">
                <button
                  disabled={isSubmitting || isRefreshing}
                  type="submit"
                  className={`submit px-4 py-2 w-32 rounded-lg bg-[#1e40af] text-white font-semibold h-fit ${
                    isSubmitting || isRefreshing
                      ? "cursor-not-allowed opacity-60"
                      : "cursor-pointer"
                  }`}
                >
                  {isSubmitting ? "Creating..." : "Submit"}
                </button>
                <button
                  disabled={isRefreshing || isSubmitting}
                  onClick={() => {
                    setIsRefreshing(true);
                    window.location.reload();
                  }}
                  type="button"
                  className={`refresh px-4 w-32 py-2 rounded-lg bg-red-700 text-white font-semibold h-fit ${
                    isSubmitting || isRefreshing
                      ? "cursor-not-allowed opacity-60"
                      : "cursor-pointer"
                  }`}
                >
                  {isRefreshing ? "Refreshing..." : "Refresh"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
