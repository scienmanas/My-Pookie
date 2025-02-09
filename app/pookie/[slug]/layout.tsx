import type { Metadata } from "next";
import { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: "Something special waiting for you",
  description:
    "Your friend wants to say something special to you, visit the website and see what they have for you.",
  keywords: ["valentine", "saas", "anime-based", "pookie"],
  authors: { name: "Manas", url: "https://scienmanas.xyz" },
  robots: "index, follow",
  openGraph: {
    title: "Something special waiting for you",
    description:
      "Your friend wants to say something special to you, visit the website and see what they have for you.",
    url: process.env.BASE_URL,
    type: "profile",
    locale: "en_US",
    siteName: process.env.SITE_NAME as string,
  },
  twitter: {
    card: "summary",
    title: "Something special waiting for you",
    description:
      "Your friend wants to say something special to you, visit the website and see what they have for you.",
    creator: "@scienmanas",
    site: process.env.SITE_NAME as string,
  },
};

export const viewport: Viewport = {
  themeColor: "pink",
};

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full h-fit">{children}</div>;
}
