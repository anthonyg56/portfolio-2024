import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import { v2 as cloudinary } from 'cloudinary';

const inter = Inter({ subsets: ["latin"] });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const metadata: Metadata = {
  title: "Fullstack Web Developer | Indianapolis, Indiana",
  description: "A Full stack web developer specialized in building beautiful & performant frontend experinces, located in Marion county Indianapolis, Indiana. Accepting fulltime work or freelance contracts for website development, website maintainence, website upgrades, and consulting .",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
