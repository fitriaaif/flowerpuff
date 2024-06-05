import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
