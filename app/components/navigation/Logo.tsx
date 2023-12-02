import Link from "next/link";
import React from "react";

export const Logo = () => {
    return (
        <Link href="/" className="hover:text-cyan-700 active:text-cyan-600 text-2xl sm:text-3xl lg:text-4xl font-bold">
            Legion Builder
        </Link>
    );
};