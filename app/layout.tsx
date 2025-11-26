import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Righteous,
  Playfair_Display,
  Roboto_Mono,
  Georama,
} from "next/font/google";
import "./globals.css";
import Provider from "./provider/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const righteous = Righteous({
  variable: "--font-righteous",
  weight: ["400"],
  subsets: ["latin"],
});

const georama = Georama({
  variable: "--font-georama",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AdhimCodes",
  description: "AdhimCodes - Portfolio",
  keywords: [
    "AdhimCodes",
    "portfolio",
    "web developer",
    "frontend developer",
    "backend developer",
    "fullstack developer",
  ],
  openGraph: {
    title: "AdhimCodes",
    description: "AdhimCodes - Portfolio",
    type: "website",
    locale: "en",
    siteName: "AdhimCodes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${righteous.variable} ${playfairDisplay.variable} ${robotoMono.variable} ${georama.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
