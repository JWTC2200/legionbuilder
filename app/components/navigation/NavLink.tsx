import { usePathname } from "next/navigation";
import { useNavState } from "@components/navigation/state";
import { ReactNode } from "react";
import Link from "next/link";
import Icons from "@components/Icons";

interface Properties {
    path: string;
    icon: string;
    children: ReactNode;
}

export default function NavLink({ path, icon, children }: Properties) {
    const Icon = Icons[icon];
    const { hide } = useNavState();
    const active = usePathname().startsWith(path);

    return (
        <Link href={path} className={`flex gap-4 lg:gap-2 items-center ${active ? " text-lime-50" : "text-lime-400 hover:text-lime-100"}`} onClick={hide}>
            <Icon className={`w-6 h-6 lg:w-4 lg:h-4 ${active ? 'text-white' : 'opacity-70'}`} />
            <span>{children}</span>
        </Link>
    );
};
