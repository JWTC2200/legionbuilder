"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { FiLogOut } from "react-icons/fi";
import Logo from "./Logo";
import NavItem from "./NavItem";
import Hamburger from "./Hamburger";
import { useNavState } from "./state";

export default function NavBar() {
  const pathname = usePathname();
  const { visible, hide } = useNavState();

  if (pathname === "/print") {
    return null;
  }

  const [user, setUser] = useState<string|null>(null)

  useEffect(() => {
    setUser(sessionStorage.getItem('uid'));
  }, []);

  const handleLogOut = async () => {
    await signOut(getAuth());
  };

  return (
    <div className="w-full bg-lime-950 py-4 px-4 lg:px-8 flex lg:flex-col justify-between lg:justify-center gap-2 items-center text-center font-subrayada">
      <Logo/>
      <div className={'z-30 absolute top-0 right-0 bottom-0 left-0 bg-stone-950/70 backdrop-blur-md flex items-center justify-center text-2xl lg:text-base ' + (visible ? 'flex' : 'hidden')} onClick={hide}>
          <nav className="flex flex-col lg:flex-row gap-6 -mt-20 lg:-mt-0">
            <NavItem path={"/reference"} icon={"skull"}>Reference</NavItem>
            <NavItem path={"/detachments"} icon={"tank"}>Detachments</NavItem>
            <NavItem path={"/formations"} icon={"banner"}>Formations</NavItem>
            <NavItem path={"/builder"} icon={"clipboard"}>List builder</NavItem>
              {user ? (
                  <div className="hidden lg:flex flex-wrap gap-4 items-center justify-center">
                      <NavItem path={"/account/lists"} icon={"book"}>
                          Lists
                      </NavItem>
                      <NavItem path={"/account"} icon={"account"}>
                          Account
                      </NavItem>
                      <button onClick={handleLogOut} className="flex items-center gap-2 hover:text-cyan-700 active:text-cyan-600">
                          Logout <FiLogOut />
                      </button>
                  </div>
              ) : (
                  <NavItem path={"/account/login"} icon={"login"}>Login</NavItem>
              )}
          </nav>
      </div>

      <Hamburger />
    </div>
  );
};
