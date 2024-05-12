import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import Cta from "@/components/sections/home/Cta";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starter X",
  description: "Starter X - Next JS Banking Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-background-100`}>
        <Header />
        <main className="relative flex flex-col">
          <div className="flex-grow flex-1">
            <Providers>
              {children}
              <Cta />
            </Providers>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
