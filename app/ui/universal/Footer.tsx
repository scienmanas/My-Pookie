export function Footer() {
  return (
    <footer className="w-full h-fit flex items-center justify-center mt-10">
      <div className="wrapper w-full max-w-screen-xl h-fit flex flex-col gap-1 items-start justify-center font-mono px-5">
        <div className="footer-contents-wrapper w-full h-fit border-t  border-[#d4d4d8] flex flex-col gap-1 items-center justify-center pt-4 pb-4">
          <div className="made-by w-fit h-fit text-center text-base sm:text-lg md:text-xl text-neutral-900 font-semibold">
            Made by <span className="text-cyan-700 underline">404</span> 🕵️‍♂️
          </div>
          <div className="extra-comments text-center w-fit h-fit flex flex-row flex-wrap text-wrap items-center justify-center">
            Consider supporting us by donating us.
          </div>
        </div>
      </div>
    </footer>
  );
}
