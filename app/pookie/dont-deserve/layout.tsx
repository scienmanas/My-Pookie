import type { Metadata } from "next";
import { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: "❌ You Don't Deserve Me 💔",
  description:
    "🚫 Get out of here! You broke my heart 💔 and now you don't deserve to see this page! 😤",
  keywords: ["heartbreak", "rejection", "dont-deserve", "broken"],
  authors: { name: "Manas", url: "https://scienmanas.xyz" },
  robots: "index, follow",
  openGraph: {
    title: "❌ You Don't Deserve Me 💔",
    description:
      "🚫 Get out of here! You broke my heart 💔 and now you don't deserve to see this page! 😤",
    url: process.env.BASE_URL,
    type: "profile",
    locale: "en_US",
    siteName: process.env.SITE_NAME as string,
  },
  twitter: {
    card: "summary",
    title: "❌ You Don't Deserve Me 💔",
    description:
      "🚫 Get out of here! You broke my heart 💔 and now you don't deserve to see this page! 😤",
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
