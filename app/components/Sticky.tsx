import { ReactNode, useEffect, useRef, useState } from "react"

export default function ({ className, children }: { className?: string; children: ReactNode }) {
	const ref = useRef(null)
	const [position, setPosition] = useState(0)

	useEffect(() => {
		if (ref == null) return

		// @ts-ignore - couldn't get ref.current to stop whining. It'll never be null at this point, due to conditional check above ^

		setPosition(ref.current.getBoundingClientRect().y)
	})

	return (
		<section className={`sticky ${className}`} ref={ref} style={{ top: position + "px" }}>
			{children}
		</section>
	)
}
