import { DETACHMENT_TYPE } from "@type/types"
import { getDetachmentIcon } from "@/app/utils/detachmentIcons"
import Icons from "@components/Icons"

interface properties {
	slotType: DETACHMENT_TYPE
}

const DetachmentSlotTitle = ({ slotType }: properties) => {
	const Icon = Icons[getDetachmentIcon(slotType)]
	return (
		<h4 className="sm:w-full flex gap-2 items-center justify-center builder_title_background text-primary-100 clip-path-halfagon-md text-center py-2 sm:text-xl font-graduate px-2 mx-2 sm:mx-0">
			<Icon className={"sm:h-6 sm:w-6"} /> {slotType}
			<Icon className={"sm:h-6 sm:w-6"} />
		</h4>
	)
}

export default DetachmentSlotTitle
