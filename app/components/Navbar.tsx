"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthContext } from "../firebase/auth/AuthContext";
import { getAuth, signOut } from "firebase/auth";

import {
  GiChewedSkull,
  GiTank,
  GiVerticalBanner,
  GiHamburgerMenu,
} from "react-icons/gi";
import { FaClipboardList, FaBook } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { MdManageAccounts } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  if (pathname === "/print") {
    return null;
  }

  const [menu, setMenu] = useState<boolean>(false);

  const { user } = useAuthContext();
  const auth = getAuth();

  const handleLogOut = async () => {
    await signOut(auth);
  };

  return (
    <nav className="w-full bg-green-950 text-green-50 py-4 px-4 lg:px-8 flex lg:flex-col justify-center gap-2 items-center text-center font-subrayada">
      <Link href="/" className={`hover:text-cyan-700 active:text-cyan-600`}>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Legion Builder
        </h1>
      </Link>
      <div className="hidden lg:flex max-w-screen-md flex-wrap items-center text-center justify-center gap-4">
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
        <div className="hidden lg:flex flex-wrap gap-4 items-center justify-center">
          <Link
            href="/account/lists"
            className="flex gap-1 items-center hover:text-cyan-700 active:text-cyan-600"
          >
            <FaBook /> Lists
            <FaBook />
          </Link>
          <Link
            href="/account"
            className="flex gap-1 items-center hover:text-cyan-700 active:text-cyan-600"
          >
            <MdManageAccounts />
            Account
            <MdManageAccounts />
          </Link>
          <button
            onClick={handleLogOut}
            className="flex items-center gap-2 hover:text-cyan-700 active:text-cyan-600"
          >
            Logout <FiLogOut />
          </button>
        </div>
      ) : (
        <Link
          href="/account/login"
          className="hidden lg:flex items-center gap-2 hover:text-cyan-700 active:text-cyan-600"
        >
          Login <FiLogIn />
        </Link>
      )}

      {/* SMALL SCREEN HAMBURGER MENU */}
      <div className="lg:hidden relative flex items-center">
        <button
          type="button"
          onClick={() => setMenu((prev) => !prev)}
          className="text-2xl hover:text-cyan-700 active:text-cyan-700"
        >
          {menu ? <RxCross1 /> : <GiHamburgerMenu />}
        </button>
        {menu ? (
          <nav className="absolute flex flex-col navbar_burger_background border-4 border-green-950 rounded-xl -bottom-2 translate-y-full right-0 text-lg px-2 py-4">
            <Link
              href="/reference"
              onClick={() => setMenu((prev) => !prev)}
              className={`flex gap-1 items-center hover:text-cyan-700 active:text-cyan-600 ${
                pathname.startsWith("/reference") ? " text-cyan-700" : ""
              }`}
            >
              <GiChewedSkull /> Reference
            </Link>
            <Link
              href="/detachments"
              onClick={() => setMenu((prev) => !prev)}
              className={`flex gap-1 items-center hover:text-cyan-700 active:text-cyan-600 ${
                pathname.startsWith("/detachments") ? " text-cyan-700" : ""
              }`}
            >
              <GiTank /> Detachments
            </Link>
            <Link
              href="/formations"
              onClick={() => setMenu((prev) => !prev)}
              className={`flex gap-1 items-center hover:text-cyan-700 active:text-cyan-600 ${
                pathname.startsWith("/formations") ? " text-cyan-700" : ""
              }`}
            >
              <GiVerticalBanner /> Formations
            </Link>
            <Link
              href="/builder"
              onClick={() => setMenu((prev) => !prev)}
              className={`flex gap-1 items-center hover:text-cyan-700 active:text-cyan-600 ${
                pathname.startsWith("/builder") ? " text-cyan-700" : ""
              }`}
            >
              <FaClipboardList />
              List Builder
            </Link>
            <hr className="border border-stone-50 w-11/12 mx-auto my-2" />
            {user ? (
              <div className="flex flex-col items-start">
                <Link
                  href="/account/lists"
                  onClick={() => setMenu((prev) => !prev)}
                  className="flex gap-1 items-center hover:text-cyan-700 active:text-cyan-600"
                >
                  <FaBook /> Lists
                </Link>
                <Link
                  href="/account"
                  onClick={() => setMenu((prev) => !prev)}
                  className="flex gap-1 items-center hover:text-cyan-700 active:text-cyan-600"
                >
                  <MdManageAccounts /> Account
                </Link>
                <button
                  onClick={() => {
                    handleLogOut;
                    setMenu((prev) => !prev);
                  }}
                  className="flex items-center gap-2 hover:text-cyan-700 active:text-cyan-600"
                >
                  Logout <FiLogOut />
                </button>
              </div>
            ) : (
              <Link
                href="/account/login"
                onClick={() => setMenu((prev) => !prev)}
                className="flex items-center gap-2 hover:text-cyan-700 active:text-cyan-600"
              >
                Login <FiLogIn />
              </Link>
            )}
          </nav>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
