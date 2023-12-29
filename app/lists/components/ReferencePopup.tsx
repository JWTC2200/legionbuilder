"use client"

import React, { ReactNode, useState } from "react"
import Icons from "../../components/Icons"
import { detachmentData } from "../../data/detachment_data"
import DetachmentDataslate from "../../components/DetachmentDataslate"

interface properties {
	detachmentId: number
	children?: ReactNode
}

const ReferencePopup = ({ detachmentId, children }: properties) => {
	const [hidden, setHidden] = useState(true)
	const Icon = Icons["information"]

	const unit = detachmentData.find((detachment) => detachment.id === detachmentId)!

	return (
		<button className="hover:text-tertiary-800 active:text-tertiary-800 cursor-help select-text" onClick={() => setHidden((prev) => !prev)}>
			{children ? children : <Icon className="" />}
			{unit && !hidden ? (
				<div className="absolute max-w-xl top-0 left-0 pb-24 z-50">
					<DetachmentDataslate detachment={unit} no_related={true} />
				</div>
			) : null}
		</button>
	)
}

export default ReferencePopup
