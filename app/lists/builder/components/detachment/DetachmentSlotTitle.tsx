import { DETACHMENT_TYPE } from "@/app/types/types"
import { getDetachmentIcon } from "@/app/utils/detachmentIcons"

interface properties {
	slotType: DETACHMENT_TYPE
}

const DetachmentSlotTitle = ({ slotType }: properties) => {
	const detachmentIcon = getDetachmentIcon(slotType)
	return (
		<h4 className="sm:w-full flex gap-1 items-center justify-center builder_title_background text-primary-50 text-graduate clip-path-halfagon-lg text-center py-2 sm:text-xl font-graduate px-2 mx-2 sm:mx-0">
			{detachmentIcon} {slotType}
			{detachmentIcon}
		</h4>
	)
}

export default DetachmentSlotTitle
