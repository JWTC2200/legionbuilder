import DetachmentDataslate from "@/app/components/DetachmentDataslate"
import { DETACHMENT } from "@/app/types/types"
import { useState } from "react"

interface properties {
	detachment: DETACHMENT
}

const ReferencePopup = ({ detachment }: properties) => {
	const [visible, setVisible] = useState(false)
	return (
		<div className={`${visible && "absolute top-0 z-50"}`}>
			{visible ? <DetachmentDataslate detachment={detachment} /> : null}
		</div>
	)
}

export default ReferencePopup
