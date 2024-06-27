import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google';
import Head from 'next/head';

export const metadata: Metadata = {
  title: "FlowerStuff",
  description: "Perfect Flower Bouquet for Every Occasion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="cLGKC8jY78AzVoQqdiU66Mv2X-IWi5MOJzdvmXT8QbI" />
      </Head>
      <body>
        {children}
        <GoogleTagManager gtmId="G-B20N8LCNY3" />
      </body>
      <GoogleTagManager gtmId="G-B20N8LCNY3" />
    </html>
  );
}
