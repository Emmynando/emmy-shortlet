import type { Metadata } from "next";
import { Inter as Inter } from "next/font/google";
import Navbar from "@/components/UI/Navbar";
// import Navbar from "../src/components/UI/Navbar";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Emmy Shortlet",
  description: "Comfortable and Exquisite Apartment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <AuthProvider>
            <Navbar />
            {children}
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
