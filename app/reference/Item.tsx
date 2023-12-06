import Link from "next/link";
import Icons from "@components/Icons";

export default function({ href, icon, children }: { href: string, icon: string, children: string }) {
    const Icon = Icons[icon];

    return (
        <Link href={href} className="flex flex-col justify-center items-center font-graduate font-semibold text-lime-950 w-36 h-36 lg:w-40 lg:h-40 clip-path-halfagon-lg bg-dataslate hover:bg-dataslate">
            <Icon className="w-11 h-11"/>
            <span>{children}</span>
        </Link>
    );
};
