import "@/app/globals.css";
import { Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

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
      <body
        className={`antialiase  bg-[#eaeaea] scroll-smooth`}
      >
        {children}
        <GoogleAnalytics
          gaId={process.env.G_ANALYTICS_ID as string}
          debugMode={false}
        />
      </body>
    </html>
  );
}
