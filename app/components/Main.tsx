import { ReactNode } from "react";

export default function({ className, children } : { children: ReactNode, className?: string }) {
    return (
        <main className={`container mx-auto max-w-screen-lg h-full w-full flex-1 ${className ? className : ''}`}>
            {children}
        </main>
    );
}