import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "FlowerStuff",
  description: "Perfect Flower Bouqet for Every Occasion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-CQFRF5Y66E" />
      <body>{children}</body>
    </html>
  );
}
