import Header from "@/components/header/Header";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Wardrobe",
  description:
    "Discover high-quality capes, stunning cosmetics, and endless customization, all in one place.",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body className="bg-custom-black font-basically text-white">
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
