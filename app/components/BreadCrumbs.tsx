"use client";

import { Children, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function BreadCrumbs({ children } : { children: ReactNode }) {
    children = Children.toArray(children);

    return (
        <header className="bg-secondary-900 p-4 py-2 text-xl font-graduate">
            {/* @ts-ignore - you can actually map over this, so not sure what TS is bitching about! */}
            {children.map((child: any, key: string) => (
                <span className="group" key={key}>
                    {child}<span className="group-last:hidden px-2 text-secondary-500">&gt;</span>
                </span>
            ))}
        </header>
    );
}

export function Crumb({ href, children } : { href: string, children: ReactNode }) {
    const active = usePathname().endsWith(href);

    return (!active ? (
        <Link href={href} className="text-primary-500 hover:text-primary-200">
            {children}
        </Link>
    ) : (
        <h1 className="inline text-secondary-300">
            {children}
        </h1>
    ));
}
