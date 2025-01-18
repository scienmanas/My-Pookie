import type { Metadata } from "next";
import "@/app/globals.css";
import { Navbar } from "@/app/ui/landing/Navbar";
import { Footer } from "@/app/ui/universal/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.DOMAIN as string),
  title: "My Pookie",
  description:
    "Want to wish your loved ones on their special day, here we comes, with a unique way to wish them. Just visit our website and send them a beautiful wish.",
  keywords: ["valentine", "saas", "anime-based", "pookie"],
  authors: { name: "Manas", url: "https://scienmanas.xyz" },
  robots: "index, follow",
  openGraph: {
    title: "My Pookie",
    description:
      "Want to wish your loved ones on their special day, here we comes, with a unique way to wish them. Just visit our website and send them a beautiful wish.",
    url: process.env.DOMAIN,
    type: "profile",
    locale: "en_US",
    siteName: process.env.SITE_NAME as string,
    //   images: metaDataImg.src,
  },
  twitter: {
    card: "summary",
    title: "My Pookie",
    description:
      "Want to wish your loved ones on their special day, here we comes, with a unique way to wish them. Just visit our website and send them a beautiful wish.",
    creator: "@scienmanas",
    site: process.env.SITE_NAME as string,
    //   images: metaDataImg.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiase  bg-[#eaeaea] scroll-smooth`}>
        <div className="page-content flex flex-col gap-8">
          <Navbar />
          <div className="body-contents">{children}</div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
