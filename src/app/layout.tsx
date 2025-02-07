import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollLockProvider } from "@/context/ScrollLockContext";

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
    <html lang="en">
      <body className={inter.className}>
        <ScrollLockProvider>{children}</ScrollLockProvider>
      </body>
    </html>
  );
}
