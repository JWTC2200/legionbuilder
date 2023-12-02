export default function NavItem({ className, children }) {
    return (
        <li className={className}>
            {children}
        </li>
    );
};