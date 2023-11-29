import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import AuthContextProvider from "./firebase/auth/AuthContext";

export const metadata: Metadata = {
  title: "Legion Builder",
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
        <AuthContextProvider>
          <Navbar />
          {children}
          <Analytics />
        </AuthContextProvider>
      </body>
    </html>
  );
}
