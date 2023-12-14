import { ReactNode, useEffect, useRef, useState } from "react"

export default function ({ className, children }: { className?: string; children: ReactNode }) {
	const ref = useRef<HTMLDivElement>(null)
	const [position, setPosition] = useState(0)

	useEffect(() => {
		if (ref !== null && ref.current) {
			setPosition(ref.current.getBoundingClientRect().y)
		}
	})

	return (
		<section className={`sticky ${className}`} ref={ref} style={{ top: position + "px" }}>
			{children}
		</section>
	)
}
