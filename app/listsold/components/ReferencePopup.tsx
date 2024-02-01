"use client"

import { ReactNode, useState } from "react"
import Icons from "../../components/Icons"
import { detachmentData } from "../../data/detachment_data"
import DetachmentDataslate from "../../components/DetachmentDataslate"

interface properties {
	detachmentId: number
	children?: ReactNode
}

const ReferencePopup = ({ detachmentId, children }: properties) => {
	const [hidden, setHidden] = useState(true)
	// const Icon = Icons["information"]
	const Icon = (
		<div className="rounded-full h-5 w-5 my-1 flex items-center justify-center bg-backgrounds-900 text-tertiary-50 hover:bg-backgrounds-800 hover:text-tertiary-400 font-bold">
			?
		</div>
	)

	const unit = detachmentData.find((detachment) => detachment.id === detachmentId)!

	return (
		<button
			className="hover:text-tertiary-800 active:text-tertiary-800 cursor-help select-text"
			onClick={() => setHidden((prev) => !prev)}>
			{children ? children : Icon}
			{unit && !hidden ? (
				<div className="absolute max-w-xl top-0 left-0 z-50 rounded-lg bg-backgrounds-950 mt-1 px-2 pb-2">
					<div className="font-semibold hover:text-tertiary-800 text-primary-50 py-2">Click to close</div>
					<DetachmentDataslate detachment={unit} no_related={true} />
				</div>
			) : null}
		</button>
	)
}

export default ReferencePopup
