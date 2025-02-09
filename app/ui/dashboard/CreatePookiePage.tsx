"use client";

import { firaSansFont } from "@/app/utils/fonts";
import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import { Input } from "@/app/ui/components/Input";
import { Options } from "@/app/ui/components/Options";
import { TextArea } from "@/app/ui/components/TextArea";
import { usePookiePageList } from "@/app/hooks/usePookiePageList";
import { IoClose } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa";
import { TbCopyCheckFilled } from "react-icons/tb";

export function CreatePookiePage() {
  // Context
  const { setPookiePageList } = usePookiePageList();
  // Ref
  const formRef = useRef<HTMLFormElement>(null);
  // State
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [linkName, setLinkName] = useState<null | string>(null);

  async function handleFormSubmission(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    toast.info("Creating Pookie Page...");

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
        setLinkName(data.linkName);
        setIsModalOpen(true);
        setPookiePageList((prev) => [...(prev || []), data]);
        toast.success("Pookie Page created successfully");
        document.body.style.overflow = "hidden";
      }
    } catch (error) {
      toast.error("Failed to create Pookie Page");
      console.log(error);
    } finally {
      setIsSubmitting(false);
      formRef.current?.reset();
    }
  }

  return (
    <section
      className={`w-full h-fit mt-20  flex items-center justify-center ${firaSansFont.className}`}
    >
      <ToastContainer />
      <PopUp
        linkName={linkName}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
      <div className="wrapper w-full max-w-screen-xl h-fit flex flex-col gap-4 items-start p-4 ">
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
              ref={formRef}
              onSubmit={handleFormSubmission}
              className="w-fit h-fit flex flex-col gap-6 relative"
            >
              <div className="form-contents w-fit h-fit flex flex-col gap-3 relative">
                <div className="name relative flex flex-row gap-4 flex-wrap w-fit h-fit">
                  <Input
                    required={true}
                    type="text"
                    fieldName="Name"
                    placeholder="Pookie name 🥰"
                    name="name"
                    isSubmitting={isSubmitting}
                    width="200px"
                    height="45px"
                  />
                  <Input
                    required={false}
                    type="number"
                    fieldName="Number"
                    placeholder="(not mandatory)"
                    name="number"
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
                    isSubmitting={isSubmitting}
                    maxWidth="420px"
                    height="67px"
                  />
                </div>
                <div className="confessionLine w-full h-fit">
                  <TextArea
                    required={true}
                    placeholder="Confession Line 😏, hehe boy/girl"
                    name="confessionLine"
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
                      isSubmitting={isSubmitting}
                      options={[
                        {
                          id: 0,
                          name: "I fell in love with my best friend",
                        },
                        {
                          id: 1,
                          name: "8 Letters",
                        },
                        {
                          id: 2,
                          name: "Love me like you do",
                        },
                        {
                          id: 3,
                          name: "Perfect",
                        },
                        {
                          id: 4,
                          name: "Raabta",
                        },
                        {
                          id: 5,
                          name: "Tere Sang Yaara",
                        },
                        {
                          id: 6,
                          name: "Tera Hone Laga Hoon",
                        },
                        {
                          id: 7,
                          name: "Tera Ban Jaunga",
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div className="buttons flex flex-row gap-2 flex-wrap">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className={`submit px-4 py-2 w-32 rounded-lg bg-[#1e40af] text-white font-semibold h-fit ${
                    isSubmitting
                      ? "cursor-not-allowed opacity-60"
                      : "cursor-pointer"
                  }`}
                >
                  {isSubmitting ? "Creating..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function PopUp({
  linkName,
  isModalOpen,
  setIsModalOpen,
}: {
  linkName: string | null;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [CopiedClicked, setCopiedClicked] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isModalOpen ? 1 : 0,
        scale: isModalOpen ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-96 w-full relative text-center">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          onClick={() => {
            setIsModalOpen(false);
            document.body.style.overflow = "auto";
          }}
        >
          <IoClose size={24} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Pookie Page Created! 🎉</h2>
        <div className="flex items-center justify-between border p-2 rounded-md bg-gray-100">
          <span className="truncate w-full text-sm text-gray-700">
            {`${process.env.NEXT_PUBLIC_BASE_URL}/pookie/${linkName}`}
          </span>
          <button
            className="ml-2"
            onClick={() => {
              navigator.clipboard.writeText(
                `${process.env.NEXT_PUBLIC_BASE_URL}/pookie/${linkName}`
              );
              setCopiedClicked(true);

              setTimeout(() => {
                setCopiedClicked(false);
              }, 2500);
            }}
          >
            {CopiedClicked ? (
              <TbCopyCheckFilled size={18} className="text-green-700" />
            ) : (
              <FaRegCopy
                size={18}
                className="text-blue-400 hover:text-blue-800"
              />
            )}
          </button>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
          onClick={() => {
            document.body.style.overflow = "auto";
            setIsModalOpen(false);
          }}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
}
