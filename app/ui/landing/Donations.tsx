import Link from "next/link";
import { firaSansFont } from "@/app/utils/fonts";
import { SiBuymeacoffee } from "react-icons/si";
import { SiSolana } from "react-icons/si";
import { RiBtcFill } from "react-icons/ri";
import { FaEthereum } from "react-icons/fa";
import { IconType } from "react-icons";

type donationType = {
  name: string;
  icon: IconType;
  address: string;
};

export function Donations() {
  const donationLinks: donationType[] = [
    {
      name: "Buy me a coffee",
      icon: SiBuymeacoffee,
      address: "https://buymeacoffee.com/scienmanas",
    },
    {
      name: "Bitcoin",
      icon: RiBtcFill,
      address:
        "https://btcscan.org/address/bc1qwcahm8aq9uqg5zthnvnkvl0vxkm3wku90hs4j4",
    },
    {
      name: "Ethereum",
      icon: FaEthereum,
      address:
        "https://etherscan.io/address/0x54da97548d91f8A157634C3a60f82831cD913A9c",
    },
    {
      name: "Solana",
      icon: SiSolana,
      address:
        "https://solscan.io/account/E3FrcftDnb1FXDpRBA96ja7vQmWnQ8mTk85i7m85FmhD",
    },
  ];

  return (
    <section
      className={`donation w-full h-fit flex items-center justify-center ${firaSansFont.className}`}
    >
      <div className="wrapper w-full max-w-screen-xl flex items-start h-fit p-4 flex-col gap-4">
        <div className="heading font-semibold text-2xl underline text-black">
          Donation
        </div>
        <div className="description text-neutral-600">
          <span className="font-semibold text-cyan-700 underline">
            My Pookie
          </span>{" "}
          is a free and open-source project. We rely on contributions from the
          community to keep it running. You can support us by donating to the
          following addresses:
        </div>
        <div className="links flex flex-row flex-wrap gap-2">
          {donationLinks.map((data, index) => (
            <Link key={index} href={data.address}>
              <data.icon className="text-xl text-neutral-700" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
