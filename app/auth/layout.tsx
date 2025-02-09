import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: "Sign in - My Pookie",
  description:
    "Want to wish your loved ones on their special day, here we comes, with a unique way to wish them. Just visit our website and send them a beautiful wish.",
  keywords: ["valentine", "saas", "anime-based", "pookie"],
  authors: { name: "Manas", url: "https://scienmanas.xyz" },
  robots: "index, follow",
  openGraph: {
    title: "My Pookie | Dashboard",
    description:
      "Want to wish your loved ones on their special day, here we comes, with a unique way to wish them. Just visit our website and send them a beautiful wish.",
    url: process.env.BASE_URL,
    type: "profile",
    locale: "en_US",
    siteName: process.env.SITE_NAME as string,
  },
  twitter: {
    card: "summary",
    title: "Sign in - My Pookie",
    description:
      "Want to wish your loved ones on their special day, here we comes, with a unique way to wish them. Just visit our website and send them a beautiful wish.",
    creator: "@scienmanas",
    site: process.env.SITE_NAME as string,
  },
};

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full h-fit">{children}</div>;
}
