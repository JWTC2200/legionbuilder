"use client";

import { useNavState } from "./state";
import Account from "./Account";
import Logo from "./Logo";
import NavItem from "./NavItem";
import NavLink from "./NavLink";
import Hamburger from "./Hamburger";
import useAuthState from "@/app/Auth";
import Sticky from "@components/Sticky";

export default function NavBar() {
  const { visible } = useNavState();
  const authenticated = useAuthState((state) => state.authenticated);

  return (
    <Sticky className="w-full z-30">
      <div className="w-full bg-backgrounds-950 py-4 px-4 lg:px-8 flex lg:flex-col justify-between lg:justify-center gap-4 items-center text-center font-subrayada">
        <Logo />
        <div
          className={
            "z-40 fixed top-0 right-0 bottom-0 left-0 lg:relative bg-secondary-950/70 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none justify-center text-2xl lg:text-base " +
            (visible ? "flex" : "hidden lg:flex")
          }
        >
          <ol className="flex flex-col lg:flex-row gap-6 mt-40 lg:-mt-0">
            <NavItem>
              <NavLink path="/reference" icon="skull">
                Reference
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink path="/lists" icon="builder">
                Lists
              </NavLink>
            </NavItem>
            {authenticated ? (
              <Account />
            ) : (
              <NavItem>
                <NavLink path="/account/login" icon="login">
                  Login
                </NavLink>
              </NavItem>
            )}
          </ol>
        </div>
        <Hamburger />
      </div>
    </Sticky>
  );
}
