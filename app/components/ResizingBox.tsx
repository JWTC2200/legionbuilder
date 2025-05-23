import { useState, useRef, useEffect } from "react"

interface properties {
	children: React.ReactNode
	toggle?: boolean
	className?: string
}

const ResizingBox = ({ children, toggle = true, className }: properties) => {
	const [height, setHeight] = useState<number>(0)
	const [width, setWidth] = useState(window.innerWidth)
	const outerRef = useRef<HTMLDivElement>(null)
	const innerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (innerRef.current?.clientHeight) {
			setHeight(innerRef.current.clientHeight)
		}

		const handleResize = () => {
			setWidth(window.innerWidth)
		}
		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [children, width])

	return (
		<div className={`overflow-hidden ${className}`}>
			<div
				ref={outerRef}
				style={{ height: toggle ? height + "px" : "0px" }}
				className="transition-all duration-500">
				<div ref={innerRef}>{children}</div>
			</div>
		</div>
	)
}

export default ResizingBox
