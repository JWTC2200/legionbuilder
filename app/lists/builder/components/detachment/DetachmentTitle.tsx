import React from "react"
import { getDetachmentIcon } from "@/app/utils/detachmentIcons"
import { DETACHMENT_TYPE } from "@/app/types"

const DetachmentTitle = ({ slotType }: { slotType: DETACHMENT_TYPE }) => {
	return (
		<h4 className="sm:w-full flex gap-1 items-center justify-center builder_title_background rounded-md text-primary-50 text-graduate text-center py-1 sm:text-xl font-graduate px-2 mx-2 sm:mx-0">
			{getDetachmentIcon(slotType)} {slotType}
			{getDetachmentIcon(slotType)}
		</h4>
	)
}

export default DetachmentTitle
