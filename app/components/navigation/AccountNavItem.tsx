import NavLink from "@components/navigation/NavLink";
import { FiLogOut } from "react-icons/fi";
import { getAuth, signOut } from "firebase/auth";
import { MdAccountCircle } from "react-icons/md";
import NavItem from "./NavItem";
import {useState} from "react";

export default function AccountNavItem() {
    const logout = async () => {
        await signOut(getAuth());
    };

    const [expanded, setExpanded] = useState(false);

    return (
        <NavItem className="group flex flex-col">
            <button className="w-full flex gap-2 items-center text-lime-400 hover:text-lime-100">
                <MdAccountCircle/>
                <span>Account</span>
            </button>
            <nav className={"relative"}>
                <div className={"absolute h-0 group-focus-within:h-40 overflow-hidden transition-all duration-200 ml-3 lg:-ml-3"}>
                    <ol className="flex flex-col gap-6 lg:bg-lime-950 p-6 lg:px-3">
                        <NavItem>
                            <NavLink path={"/account/lists"} icon={"book"}>Lists</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink path={"/account"} icon={"account"}>Profile</NavLink>
                        </NavItem>
                        <button onClick={logout} className="flex items-center gap-2 hover:text-cyan-700 active:text-cyan-600">
                            <FiLogOut />
                            <span>Logout</span>
                        </button>
                    </ol>
                </div>
            </nav>
        </NavItem>
    );
}