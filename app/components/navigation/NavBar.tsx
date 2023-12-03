"use client";

import { useEffect, useState } from "react";
import { useNavState } from "./state";
import AccountNavItem from "./AccountNavItem";
import Logo from "./Logo";
import NavLink from "./NavLink";
import Hamburger from "./Hamburger";
import NavItem from "@components/navigation/NavItem";

export default function NavBar() {
    const {visible, hide} = useNavState();
    const [user, setUser] = useState<string | null>(null)

    useEffect(() => {
        setUser(sessionStorage.getItem('uid'));
    }, []);

    return (
        <div className="w-full bg-lime-950 py-4 px-4 lg:px-8 flex lg:flex-col justify-between lg:justify-center gap-4 items-center text-center font-subrayada">
            <Logo/>
            <div className={'z-30 absolute top-0 right-0 bottom-0 left-0 lg:relative bg-stone-950/70 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none justify-center text-2xl lg:text-base ' + (visible ? 'flex' : 'hidden lg:flex')}>
                <ol className="flex flex-col lg:flex-row gap-6 mt-40 lg:-mt-0">
                    <NavItem>
                        <NavLink path="/reference" icon="skull">Reference</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink path="/detachments" icon="tank">Detachments</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink path="/formations" icon="banner">Formations</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink path="/builder" icon="builder">List builder</NavLink>
                    </NavItem>

                    {user ? (
                        <AccountNavItem/>
                    ) : (
                        <NavItem>
                            <NavLink path="/account/login" icon="login">Login</NavLink>
                        </NavItem>
                    )}
                </ol>
            </div>

            <Hamburger/>
        </div>
    );
};
