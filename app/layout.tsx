import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { EntryLoader } from "@/components/main/entry-loader";
import { StarsCanvas } from "@/components/main/star-background";
import { EasterEggs } from "@/components/main/easter-eggs";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <EntryLoader />
        <StarsCanvas />
        <Navbar />
        <div className="overflow-x-hidden">
          {children}
        </div>
        <Footer />
        <EasterEggs />
      </body>
    </html>
  );
}