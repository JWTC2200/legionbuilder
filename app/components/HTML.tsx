import {ReactNode} from "react";

export function Row({className, children} : {className?: string, children: ReactNode}) {
	return (
		<div className={`odd:bg-secondary-100 even:bg-secondary-300 text-secondary-950 ${className}`}>
			{children}
		</div>
	);
}