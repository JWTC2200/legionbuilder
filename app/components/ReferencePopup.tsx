"use client"

import React, { useState } from "react"
import Icons from "./Icons"
import { detachmentData } from "../data/detachment_data"
import DetachmentDataslate from "./DetachmentDataslate"

const ReferencePopup = ({ detachmentId }: { detachmentId: number }) => {
	const [hidden, setHidden] = useState(true)
	const Icon = Icons["information"]

	const unit = detachmentData.find((detachment) => detachment.id === detachmentId)!

	return (
		<button className="hover:text-tertiary-800 active:text-tertiary-800" onClick={() => setHidden((prev) => !prev)}>
			<Icon className="" />
			{unit && !hidden ? (
				<div className="absolute max-w-xl top-0 left-0 pb-24">
					<DetachmentDataslate detachment={unit} no_related={true} />
				</div>
			) : null}
		</button>
	)
}

export default ReferencePopup
