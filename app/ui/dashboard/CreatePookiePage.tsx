"use client";

import { firaSansFont } from "@/app/utils/fonts";
import React, { useState } from "react";
import { Input } from "@/app/ui/components/Input";
import { Options } from "@/app/ui/components/Options";
import { TextArea } from "@/app/ui/components/TextArea";

export function CreatePookiePage() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSubmissionSucessful, setIsSubmissionSucessful] =
    useState<boolean>(false);

  async function handleFormSubmission(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    // Get the form data
    const formData = new FormData(event.currentTarget);
    const jsonData = Object.fromEntries(formData.entries());

    try {
      // Send the form data to the server
      const response = await fetch("api/pookie/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(jsonData),
      });

      if (response.status === 201) {
        const data = await response.json();
        setIsSubmissionSucessful(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className={`w-full h-fit flex items-center justify-center ${firaSansFont.className}`}
    >
      <div className="wrapper w-full max-w-screen-xl h-fit flex flex-col gap-4 items-start p-4">
        <div className="heading font-semibold text-2xl underline">
          Create Pookie Page
        </div>
        <div className="body-contents w-fit h-fit flex flex-col gap-8">
          <div className="description">
            It is very simple and intuitive to create a Pookie Page for your
            Pookie. Just follow your instinct fill the from, click submit and
            you will see the magic happening all by itself.
          </div>
          <div className="form w-fit h-fit flex flex-col gap-2">
            <form
              onSubmit={handleFormSubmission}
              className="w-fit h-fit flex flex-col gap-6 relative"
            >
              <div className="form-contents w-fit h-fit flex flex-col gap-3 relative">
                <div className="name relative flex flex-row gap-4 flex-wrap w-fit h-fit">
                  <Input
                    required={true}
                    fieldName="Name"
                    placeholder="Pookie name 🥰"
                    name="name"
                    isRefreshing={isRefreshing}
                    isSubmitting={isSubmitting}
                    width="200px"
                    height="45px"
                  />
                  <Input
                    required={false}
                    fieldName="Number"
                    placeholder="(not mandatory)"
                    name="number"
                    isRefreshing={isRefreshing}
                    isSubmitting={isSubmitting}
                    width="200px"
                    height="45px"
                  />
                </div>
                <div className="type-and-day flex flex-row gap-4 flex-wrap w-fit h-fit">
                  <div className="type w-fit h-fit">
                    <Options
                      required={true}
                      fieldName="Type"
                      name="type"
                      isRefreshing={isRefreshing}
                      isSubmitting={isSubmitting}
                      options={[
                        { id: "proposal", name: "Proposal" },
                        { id: "prank", name: "Prank" },
                      ]}
                    />
                  </div>
                  <div className="day w-fit h-fit">
                    <Options
                      required={true}
                      fieldName="Day"
                      name="day"
                      isRefreshing={isRefreshing}
                      isSubmitting={isSubmitting}
                      options={[
                        { id: "rose_day", name: "Rose Day" },
                        { id: "propose _day", name: "Propose Day" },
                        { id: "chocolate_day", name: "Chocolate Day" },
                        { id: "teddy_day", name: "Teddy Day" },
                        { id: "promise_day", name: "Promise Day" },
                        { id: "hug_day", name: "Hug Day" },
                        { id: "kiss_day", name: "Kiss Day" },
                        { id: "valentines_day", name: "Valentines Day" },
                        { id: "birthday", name: "Birthday" },
                        { id: "anniversary", name: "Anniversary" },
                      ]}
                    />
                  </div>
                </div>
                <div className="landing-pickup-line w-full h-fit">
                  <TextArea
                    required={true}
                    placeholder="Landing Pickup Line 😎"
                    name="landingPickupLine"
                    isRefreshing={isRefreshing}
                    isSubmitting={isSubmitting}
                    maxWidth="420px"
                    height="67px"
                  />
                </div>
                <div className="cheezyPickupLine w-full h-fit">
                  <TextArea
                    required={true}
                    placeholder="Cheezy Pickup Line 😏, hehe boy/girl"
                    name="landingPickupLine"
                    isRefreshing={isRefreshing}
                    isSubmitting={isSubmitting}
                    maxWidth="420px"
                    height="67px"
                  />
                </div>
                <div className="select-song w-fit h-fit flex flex-row flex-wrap gap-4 items-center">
                  <div className="song">
                    <Options
                      required={true}
                      fieldName="Select Song 🎶"
                      name="songId"
                      isRefreshing={isRefreshing}
                      isSubmitting={isSubmitting}
                      options={[
                        {
                          id: "i_fell_in_love_with_my_best_friend",
                          name: "I fell in love with my best friend",
                        },
                        {
                          id: "i_still_choose_you",
                          name: "I still choose you",
                        },
                        {
                          id: "love_me_like_you_do",
                          name: "Love me like you do",
                        },
                      ]}
                    />
                  </div>
                </div>
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
