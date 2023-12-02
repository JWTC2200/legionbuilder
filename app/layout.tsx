import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "@components/navigation/NavBar";
import AuthContextProvider from "./firebase/auth/AuthContext";

export const metadata: Metadata = {
  title: "Legion Builder",
  description:
    "A List builder for Warhammer: The Horus Heresy - Legion Imperialis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="z-0 min-w-screen min-h-screen bg-stone-900 text-stone-100 flex flex-col items-center">
        <AuthContextProvider>
          <NavBar />
          {children}
          <Analytics />
        </AuthContextProvider>
      </body>
    </html>
  );
}
