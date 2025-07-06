import type { Metadata } from "next";
import "@/app/globals.css";
import metaDataImg from "@/public/metadata/landing.png";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
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
    url: process.env.BASE_URL,
    type: "profile",
    locale: "en_US",
    siteName: process.env.SITE_NAME as string,
    images: metaDataImg.src,
  },
  twitter: {
    card: "summary",
    title: "My Pookie",
    description:
      "Want to wish your loved ones on their special day, here we comes, with a unique way to wish them. Just visit our website and send them a beautiful wish.",
    creator: "@scienmanas",
    site: process.env.SITE_NAME as string,
    images: metaDataImg.src,
  },
};

export const viewport: Viewport = {
  themeColor: "pink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiase  bg-white overflow-x-hidden scroll-smooth`}>
        {children}
        <GoogleAnalytics
          gaId={process.env.G_ANALYTICS_ID as string}
          debugMode={false}
        />
      </body>
    </html>
  );
}
