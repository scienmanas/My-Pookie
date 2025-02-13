import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full h-fit flex items-center justify-center mt-10">
      <div className="wrapper w-full max-w-screen-xl h-fit flex flex-col gap-1 items-start justify-center font-mono px-5">
        <div className="footer-contents-wrapper w-full h-fit border-t  border-[#d4d4d8] flex flex-col gap-1 items-center justify-center pt-4 pb-4">
          <div className="made-by w-fit h-fit text-center text-base sm:text-lg md:text-xl text-neutral-900 font-semibold">
            Made by <Link href={'https://scienmanas.xyz'}><span className="text-cyan-700 underline">Manas</span> 🕵️‍♂️</Link>
          </div>
          <div className="extra-comments text-center w-fit h-fit flex flex-row flex-wrap text-wrap items-center justify-center">
            Consider supporting us by donating us.
          </div>
          <div className="comments text-center  text-sm w-fit h-fit flex flex-row flex-wrap text-wrap items-center justify-center gap-2">
            <Link className="underline text-blue-700" href={"/legal/terms-and-conditions"}>
              Terms & Conditions
            </Link>
            <span>|</span>
            <Link className="underline text-blue-700" href={"/legal/privacy-policy"}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
