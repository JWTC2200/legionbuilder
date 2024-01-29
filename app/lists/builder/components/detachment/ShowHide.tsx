import { useState, useEffect } from "react"

interface properties {
	children: React.ReactNode
	title: string
	subtitle?: string
}

const ShowHide = ({ children, title, subtitle }: properties) => {
	const [show, setShow] = useState<boolean>(false)

	return (
		<div className="flex flex-col gap-2">
			<button
				onClick={() => setShow(!show)}
				className="flex justify-between items-center w-full font-graduate builder_title_background py-1 px-4 text-primary-50 clip-path-octagon-lg hover:text-tertiary-500">
				<div className="text-xs">{show ? "hide" : "show"}</div>
				{title}
				<div className="text-xs">{show ? "hide" : "show"}</div>
			</button>

			<div
				className={`fixed right-0 top-0 h-full bg-dataslate pt-20 lg:pt-32 p-1 lg:p-4 w-screen max-w-[400px] ${show ? "translate-x-0" : "translate-x-full"} ease-in-out duration-300 z-20 flex flex-col items-center gap-4`}>
				<h3 className="clip-path-octagon-md builder_title_background text-primary-50 font-graduate py-1 px-6 text-center">
					{subtitle}
				</h3>
				<div className="w-full">{children}</div>
				<button
					onClick={() => setShow(!show)}
					className="font-graduate px-2 border-2 border-backgrounds-950 rounded-full hover:text-tertiary-500 hover:border-tertiary-500">
					Close
				</button>
			</div>
		</div>
	)
}

export default ShowHide
