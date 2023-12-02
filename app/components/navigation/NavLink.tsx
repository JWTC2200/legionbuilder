import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiChewedSkull, GiTank, GiVerticalBanner} from "react-icons/gi";
import { FaBook, FaClipboardList } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import {useNavState} from "@components/navigation/state";

const components = {
    account: MdManageAccounts,
    banner: GiVerticalBanner,
    book: FaBook,
    clipboard: FaClipboardList,
    logout: FiLogOut,
    login: FiLogIn,
    skull: GiChewedSkull,
    tank: GiTank,
};

export default function NavLink({ path, icon, children }) {
    const Icon = components[icon];
    const { hide } = useNavState();
    const active = usePathname().startsWith(path);

    return (
        <Link href={path} className={`flex gap-2 items-center ${active ? " text-lime-50" : "text-lime-400 hover:text-lime-100"}`} onClick={hide}>
            <Icon className={active ? 'text-white' : 'opacity-70'} />
            <span>{children}</span>
        </Link>
    );
};
