import Image from "next/image";
import logoImg from "@/public/logo/logo.png";
import { firaSansFont } from "@/app/utils/fonts";
import Link from "next/link";
import BMCsvg from "@/public/assets/donation/bmc.svg";
import { SiSolana } from "react-icons/si";
export function Navbar() {
  const donationLink = {
    solana:
      "https://solscan.io/account/E3FrcftDnb1FXDpRBA96ja7vQmWnQ8mTk85i7m85FmhD",
    bmc: "https://www.buymeacoffee.com/scienmanas",
  };

  return (
    <nav className="w-full fixed z-20 h-fit flex items-center justify-center bg-white border border-neutral-200">
      <div className="wrapper w-full max-w-screen-xl h-fit p-2 flex flex-row items-center justify-between gap-4 flex-wrap">
        <div className="logo w-fit h-fit flex flex-row font-bold items-center">
          <Image src={logoImg} alt="img" height={50} />
          <div className={`text-lg ${firaSansFont.className}`}>My Pookie</div>
        </div>
        <div className="donation-options flex flex-row gap-3 items-center">
          <Link href={donationLink.solana}>
            <SiSolana />
          </Link>
          <Link href={donationLink.bmc}>
            <Image height={35} src={BMCsvg} alt="donate" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
