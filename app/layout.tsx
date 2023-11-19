import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Legion Imperiallis",
  description: "List builder for Legion Imperiallis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-w-screen min-h-screen bg-stone-900 text-stone-100 flex flex-col items-center">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
