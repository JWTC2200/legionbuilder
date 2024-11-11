import React from "react"
import { DETACHMENT_TYPE } from "@type/types"
import { getDetachmentIcon } from "@app/utils/detachmentIcons"

const SlotIcon = ({ detachmentType, className }: { detachmentType: DETACHMENT_TYPE; className?: string }) => {
	const Icon = getDetachmentIcon(detachmentType)

	return <Icon className={className} />
}

export default SlotIcon
