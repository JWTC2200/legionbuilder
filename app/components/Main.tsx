import { ReactNode } from "react"

export default function ({ className, children }: { children: ReactNode; className?: string }) {
	return (
		<main
			className={`container mx-auto max-w-screen-xl w-full flex-1 z-10 bg-secondary-900 xl:px-4 pb-4 ${className ? className : ""}`}>
			{children}
		</main>
	)
}
