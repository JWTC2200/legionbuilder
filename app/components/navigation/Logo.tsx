import Link from "next/link";
import React from "react";

export default function Logo() {
    return (
        <Link href="/" className="text-gray-200 hover:text-lime-100 text-2xl sm:text-3xl lg:text-4xl font-bold">
            Legion Builder
        </Link>
    );
};