import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollLockProvider } from "@/context/ScrollLockContext";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Polarizeed",
  description: "Experience Perfect Balance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="relative w-full overflow-x-hidden">
          <ScrollLockProvider>{children}</ScrollLockProvider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
