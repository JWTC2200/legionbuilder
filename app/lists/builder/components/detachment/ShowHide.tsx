import { useState } from "react"

interface properties {
	children: React.ReactNode
	title: string
}

const ShowHide = ({ children, title }: properties) => {
	const [show, setShow] = useState(false)

	return (
		<div className="flex flex-col gap-2">
			<button
				onClick={() => setShow(!show)}
				className="flex justify-between items-center w-full font-graduate builder_title_background py-1 px-4 text-primary-50 clip-path-halfagon-md hover:text-tertiary-500">
				<div className="text-xs">{show ? "hide" : "show"}</div>
				{title}
				<div className="text-xs">{show ? "hide" : "show"}</div>
			</button>

			{show ? children : null}
		</div>
	)
}

export default ShowHide
