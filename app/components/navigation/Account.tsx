import { getAuth, signOut } from "firebase/auth";
import { AccountCircle, Logout } from "@components/Icons";
import NavLink from "./NavLink";
import NavItem from "./NavItem";
import useAuthState from "@/app/Auth";

export default function () {
  const reset = useAuthState((state) => state.reset);

  const logout = async () => {
    await signOut(getAuth());
    reset();
  };

  return (
    <NavItem className="group flex flex-col">
      <button className="w-full flex gap-4 lg:gap-2 items-center text-primary-400 hover:text-primary-100">
        <AccountCircle className={"w-6 h-6 lg:w-4 lg:h-4"} />
        <span>Account</span>
      </button>
      <nav className={"relative"}>
        <div
          className={
            "absolute h-0 group-focus-within:h-40 overflow-hidden transition-all duration-200 ml-3 lg:-ml-3"
          }
        >
          <ol className="flex flex-col gap-6 lg:bg-primary-950 p-6 lg:px-3">
            <NavItem>
              <NavLink path={"/account"} icon={"manageAccount"}>
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <button
                onClick={logout}
                className="flex items-center gap-2 hover:text-cyan-700 active:text-cyan-600"
              >
                <Logout className={"w-6 h-6 lg:w-4 lg:h-4"} />
                <span>Logout</span>
              </button>
            </NavItem>
          </ol>
        </div>
      </nav>
    </NavItem>
  );
}
