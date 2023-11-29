"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthContext } from "../firebase/auth/AuthContext";
import { User, getAuth, signOut } from "firebase/auth";

import { GiChewedSkull, GiTank, GiVerticalBanner } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();
  if (pathname === "/print") {
    return null;
  }

  const { user } = useAuthContext();
  const auth = getAuth();

  const handleLogOut = async () => {
    await signOut(auth);
  };

  return (
    <nav className="w-full bg-green-950 text-green-50 py-4 sm:py-8 px-4 sm:px-8 flex flex-col items-center text-center font-subrayada">
      <Link href="/" className={`hover:text-cyan-700 active:text-cyan-600`}>
        <h1 className="text-4xl font-bold mb-4">Legion Builder</h1>
      </Link>
      <div className="max-w-screen-md flex flex-wrap items-center text-center justify-center gap-4">
        <Link
          href="/reference"
          className={`flex gap-1 items-center hover:text-cyan-700 active:text-cyan-600 ${
            pathname.startsWith("/reference") ? " text-cyan-700" : ""
          }`}
        >
          <GiChewedSkull /> Reference
          <GiChewedSkull />
        </Link>
        <Link
          href="/detachments"
          className={`flex gap-1 items-center hover:text-cyan-700 active:text-cyan-600 ${
            pathname.startsWith("/detachments") ? " text-cyan-700" : ""
          }`}
        >
          <GiTank /> Detachments
          <GiTank />
        </Link>
        <Link
          href="/formations"
          className={`flex gap-1 items-center hover:text-cyan-700 active:text-cyan-600 ${
            pathname.startsWith("/formations") ? " text-cyan-700" : ""
          }`}
        >
          <GiVerticalBanner /> Formations
          <GiVerticalBanner />
        </Link>
        <Link
          href="/builder"
          className={`flex gap-1 items-center hover:text-cyan-700 active:text-cyan-600 ${
            pathname.startsWith("/builder") ? " text-cyan-700" : ""
          }`}
        >
          <FaClipboardList />
          List Builder
          <FaClipboardList />
        </Link>
      </div>
      {user ? (
        <button onClick={handleLogOut} className="mt-4 flex items-center gap-2">
          Logout <FiLogOut />
        </button>
      ) : (
        <Link href="/account/login" className="mt-4 flex items-center gap-2">
          Login <FiLogIn />
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
