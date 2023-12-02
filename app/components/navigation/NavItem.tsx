import {ReactNode} from "react";

interface Properties {
    className?: string;
    children?: ReactNode;
}

export default function NavItem({ className, children }: Properties) {
    return (
        <li className={className}>
            {children}
        </li>
    );
};
