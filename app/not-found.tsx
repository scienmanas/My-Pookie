import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import Gif404 from "@/public/assets/animations/404.gif";

// Generate metadata for the 404 error page
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `404 - ${process.env.SITE_NAME}`,
    description:
      "Error, the specified URL cannot be found, please check the url and try again",
    openGraph: {
      title: `404 - ${process.env.SITE_NAME}`,
      description:
        "Error, the specified URL cannot be found, please check the url and try again",
    },
    twitter: {
      title: `404 - ${process.env.SITE_NAME}`,
      description:
        "Error, the specified URL cannot be found, please check the url and try again", //
    },
  };
}

// Component to display a 404 error page when a route is not found
export default function NotFound() {
  return (
    <div className="w-dvw h-dvh flex items-center justify-center">
      <div className="content-wrapper w-fit h-fit flex flex-col items-center max-w-[448px] text-wrap gap-4 p-4">
        {/* Display the 404 error code */}
        <div className="error-gif w-fit h-fit">
          <Image
            src={Gif404}
            alt="404"
            unoptimized
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="regrets-and-console-text w-fit h-fit flex flex-col items-center justify-center gap-2">
          {/* Regret message for the missing page */}
          <div className="regret-text w-fit h-fit text-center text-wrap font-bold text-neutral-800 text-2xl">
            Sorry 😔, I couldn't find this page.
          </div>
          {/* Suggestion to visit the homepage */}
          <div className="console-person w-fit h-fit text-center text-wrap text-neutral-600">
            Looks like your friend has an amazing sense of direction! 🧭😂 You
            could try going back... or just embrace the chaos. 🤷‍♂️
          </div>
        </div>
        {/* Button to navigate back to the homepage */}
        <Link href={"/"} className="w-fit h-fit mt-4">
          <button className="return-to-home w-fit h-fit px-5 py-4 rounded-[30px] bg-transparent dark:bg-transparent text-neutral-700 border border-[#9ea5b0] hover:bg-neutral-200 hover:border-neutral-600 hover:text-neutral-800  duration-300">
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}
