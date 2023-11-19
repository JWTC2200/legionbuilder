"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiChewedSkull, GiTank } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-green-950 text-green-50 py-4 sm:py-8 px-4 sm:px-8 flex flex-col items-center  text-center font-subrayada">
      <Link href="/" className={`hover:text-cyan-700 active:text-cyan-600`}>
        <h1 className="text-4xl font-bold">Legion Imperiallis</h1>
      </Link>
      <div className="max-w-screen-sm flex flex-wrap gap-4">
        <Link
          href="/units"
          className={`flex gap-1 items-center hover:text-cyan-700 active:text-cyan-600 ${
            pathname === "/units" ? " text-cyan-700" : ""
          }`}
        >
          <GiChewedSkull /> Units
          <GiChewedSkull />
        </Link>
        <Link
          href="/detachments"
          className={`flex gap-1 items-center hover:text-cyan-700 active:text-cyan-600 ${
            pathname === "/detachments" ? " text-cyan-700" : ""
          }`}
        >
          <GiTank /> Detachments
          <GiTank />
        </Link>
        <Link
          href="/formations"
          className={`flex gap-1 items-center hover:text-cyan-700 active:text-cyan-600 ${
            pathname === "/formations" ? " text-cyan-700" : ""
          }`}
        >
          <GiTank /> Formations
          <GiTank />
        </Link>
        <Link
          href="/builder"
          className={`flex gap-1 items-center hover:text-cyan-700 active:text-cyan-600 ${
            pathname === "/builder" ? " text-cyan-700" : ""
          }`}
        >
          <FaClipboardList />
          List Builder
          <FaClipboardList />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
