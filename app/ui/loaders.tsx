import Image from "next/image";
import { loveYaLikeASister } from "../utils/fonts";
import pageLoaderGif from "@/public/assets/animations/page-loader.gif";

export function PageLoader() {
  return (
    <div className="page-loader w-dvw h-dvh flex items-center justify-center">
      <div className="page-loader-wrapper w-fit h-fit p-4 flex items-center justify-center gap-2 flex-col">
        <Image
          src={pageLoaderGif}
          priority
          unoptimized
          aria-hidden
          alt="page-loader"
          className="select-none pointer-events-none"
        />
        <div
          className={`lines ${loveYaLikeASister.className} text-center text-black text-lg`}
        >
          Just a few moments 💖...
        </div>
      </div>
    </div>
  );
}

export function SubmissionLoader({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) {
  return (
    <div className="flex justify-center items-center w-fit h-fit">
      {/* Spinner element with dynamic styles */}
      <div
        style={{
          width: width, // Width of the spinner
          height: height, // Height of the spinner
          borderColor: color, // Color of the spinner border
        }}
        className="animate-spin rounded-full border-b-2"
      ></div>
    </div>
  );
}
