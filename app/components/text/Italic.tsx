import React from "react"

type properties = {
	text: string
	className?: string
}
const Italic = ({ text, className }: properties) => {
	return <span className={`italic + ${className}`}>{text}</span>
}

export default Italic
