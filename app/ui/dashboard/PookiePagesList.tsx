"use client";

import { firaSansFont } from "@/app/utils/fonts";
import { useState, useEffect } from "react";
import Image from "next/image";
import loaderGif from "@/public/assets/animations/all-pookie-page-loader.gif";
import Link from "next/link";
import {
  usePookiePageList,
  PookiePageListTypes,
} from "@/app/hooks/usePookiePageList";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

export function PookiePagesList() {
  const [Mounted, setMounted] = useState<boolean>(false);
  const { pookiePageList, setPookiePageList } = usePookiePageList();

  useEffect(() => {
    const fetchPookiePages = async () => {
      const response = await fetch("api/pookie/all", {
        method: "GET",
        credentials: "include",
      });

      if (response.status === 200) {
        const data = await response.json();
        setPookiePageList(data);
        setMounted(true);
      } else {
        console.log("Failed to fetch Pookie pages");
      }
    };

    fetchPookiePages();
  }, [setPookiePageList]);

  return (
    <section
      className={`w-full h-fit flex items-center justify-center ${firaSansFont.className}`}
    >
      <div className="wrapper w-full max-w-screen-xl h-fit flex flex-col gap-4 items-start p-4">
        <div className="heading text-black text-2xl font-semibold w-fit h-fit underline">
          All Pookie pages
        </div>
        {Mounted && pookiePageList ? (
          pookiePageList.length > 0 ? (
            <PookiePageFetchedList
              pages={pookiePageList}
              setPookiePageList={
                setPookiePageList as React.Dispatch<
                  React.SetStateAction<PookiePageListTypes[]>
                >
              }
            />
          ) : (
            <PookiePageListLoader />
          )
        ) : (
          <PookiePageListLoader />
        )}
      </div>
    </section>
  );
}

function PookiePageFetchedList({
  pages,
  setPookiePageList,
}: {
  pages: PookiePageListTypes[];
  setPookiePageList: React.Dispatch<
    React.SetStateAction<PookiePageListTypes[]>
  >;
}) {
  return (
    <div className="w-full overflow-x-auto bg-white shadow-md">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left text-sm sm:text-base">
            <th className="border border-gray-300 p-2 text-neutral-800 text-center">
              Name
            </th>
            <th className="border border-gray-300 p-2 text-neutral-800 text-center">
              Type
            </th>
            <th className="border border-gray-300 p-2 text-neutral-800 text-center">
              Accepted
            </th>
            <th className="border border-gray-300 p-2 text-neutral-800 text-center">
              Visits
            </th>
            <th className="border border-gray-300 p-2 text-neutral-800 text-center">
              Last Visited
            </th>
            <th className="border border-gray-300 p-2 text-neutral-800 text-center">
              Created On
            </th>
            <th className="border border-gray-300 p-2 text-neutral-800 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {pages.map((page) => (
            <tr
              key={page.id}
              className="border border-gray-300 text-sm sm:text-base"
            >
              <td className="border border-gray-300 p-2 text-neutral-700 text-center">
                {page.name}
              </td>
              <td className="border border-gray-300 p-2 text-neutral-700 text-center">
                {page.type}
              </td>
              <td className="border border-gray-300 p-2 text-neutral-700 text-center">
                {page.accepted === true ? "Yes" : "No"}
              </td>
              <td className="border border-gray-300 p-2 text-neutral-700 text-center">
                {page.visitCount}
              </td>
              <td className="border border-gray-300 p-2 text-neutral-700 text-center">
                {new Date(page.lastVisited).toLocaleString() ===
                new Date(page.createdAt).toLocaleString()
                  ? "Never"
                  : new Date(page.lastVisited).toLocaleString()}
              </td>
              <td className="border border-gray-300 p-2 text-neutral-700 text-center">
                {new Date(page.createdAt).toLocaleString()}
              </td>
              <td className="text-neutral-700 flex flex-row gap-2 items-center justify-center flex-wrap">
                <Link
                  target="blank"
                  href={`/pookie/${page.linkName}`}
                  className="text-blue-600 underline p-1"
                >
                  <FaExternalLinkAlt />
                </Link>
                <button
                  type="button"
                  className="p-1"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${process.env.NEXT_PUBLIC_BASE_URL}/pookie/${page.linkName}`
                    );
                  }}
                >
                  <FaRegCopy />
                </button>
                <button
                  type="button"
                  onClick={async () => {
                    toast.info("Deleting page...");
                    const response = await fetch("api/pookie/delete", {
                      method: "DELETE",
                      credentials: "include",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ id: page.id }),
                    });

                    if (response.status === 200) {
                      toast.success("Page deleted successfully");
                      // Update the page list
                      setPookiePageList((prev) => {
                        return prev.filter((p) => p.id !== page.id);
                      });
                    } else {
                      toast.error("Failed to delete page");
                    }
                  }}
                  className="p-1"
                >
                  <MdDeleteForever className="text-xl text-red-700" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PookiePageListLoader() {
  return (
    <div className="image-still-mounting w-fit h-fit flex flex-col items-start gap-2">
      <Image
        src={loaderGif}
        alt="Loading..."
        width={200}
        height={200}
        className="w-fit h-fit"
      />
      <div className="text-loading"></div>
    </div>
  );
}
