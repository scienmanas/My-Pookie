import { firaSansFont } from "@/app/utils/fonts";

export function TermsAndPolicy() {
  return (
    <section
      className={`w-full h-fit flex items-center justify-center ${firaSansFont.className}`}
    >
      <div className="wrapper w-full max-w-screen-xl h-fit flex items-start p-4 flex-col gap-4">
        <div className="heading font-semibold text-black underline text-2xl">
          Terms & Policy
        </div>
        <div className="description text-neutral-700 flex flex-col gap-2">
          There's not much terms and policy here, we store least data possible
          and we don't share it with anyone. Here is all the summed up terms and
          policy:
          <ul className="list-disc list-inside">
            <li>
              We collect your name, email, and profile photo to create your
              account.
            </li>
            <li>
              Any additional data collected when you create a Pookie Page is
              stored securely. However, we promise not to sell it anywhere.
            </li>
            <li>
              If you wish to delete all your Pookie Pages and your account,
              please email me at{" "}
              <span className="text-cyan-800 underline">
                iamscientistmanas@gmail.com
              </span>
              .
            </li>
            <li>You agree not to harass anyone using this app.</li>
            <li>
              You agree not to send irrelevant Pookie Pages to people you don't
              know or to those who might not appreciate them.
            </li>
            <li>
              You acknowledge that I hold no liability for any damages caused by
              Pookie Pages.
            </li>
            <li>You agree not to use this app for any illegal activities.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
