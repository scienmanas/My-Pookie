import { firaSansFont } from "@/app/utils/fonts";

export function Features() {
  return (
    <section
      className={`features w-full h-fit flex items-center justify-center ${firaSansFont.className}`}
    >
      <div className="wrapper w-full max-w-screen-xl flex flex-col items-start justify-center h-fit p-4 gap-4">
        <div className="feauture-display flex flex-col gap-4 w-fit h-fit">
          <div className="heading font-semibold text-2xl text-black underline">
            Features
          </div>
          <div className="description w-fit h-fit">
            So you’re curious about the features? Well, my friend, I’ve got you
            covered! Because I know your{" "}
            <span className="font-semibold">pookie</span> is your top priority.
            💖 Here’s what we’ve got for you:
          </div>
          <div className="features-list bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-md">
            <ul className="list-disc pl-2 space-y-3">
              <li>No coding required 🚫💻</li>
              <li>Amazing animations that will blow your mind 💫</li>
              <li>Beautiful UI that’s easy on the eyes 🎨</li>
              <li>Super simple and intuitive to use 🧩</li>
              <li>Fully mobile-friendly for all devices 📱💻</li>
            </ul>
          </div>
        </div>
        <div className="animations-display">
          <div className="heading-desc text-black">
            We have amazing and funny animation for you which you will definetly
            like.
          </div>
        </div>
      </div>
    </section>
  );
}
