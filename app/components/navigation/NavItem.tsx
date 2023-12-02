import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiChewedSkull, GiTank, GiVerticalBanner} from "react-icons/gi";
import { FaBook, FaClipboardList } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FiLogIn, FiLogOut } from "react-icons/fi";

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

export default function NavItem({ path, icon, children }) {
    const Icon = components[icon];

    return (
        <Link href={path} className={`flex gap-2 items-center ${usePathname().startsWith(path) ? " text-lime-50" : "text-lime-400 hover:text-lime-100"}`}>
            <Icon className="opacity-70" />
            <span>{children}</span>
        </Link>
    );
};
