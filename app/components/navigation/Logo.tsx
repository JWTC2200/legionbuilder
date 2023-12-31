import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="z-50 text-gray-200 hover:text-primary-100 text-xl sm:text-3xl lg:text-4xl font-bold">
            Legion Builder
        </Link>
    );
};