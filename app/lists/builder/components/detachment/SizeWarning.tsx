import { detachmentSize } from "../../../utils"
import { BUILDER_DETACHMENT_UNIT } from "@/app/types"

const SizeWarning = ({ selectedUnit }: { selectedUnit: BUILDER_DETACHMENT_UNIT }) => {
	return <>{detachmentSize(selectedUnit) > selectedUnit.max_size ? <p className="text-center text-red-500 sm:text-xl">Detachment too large!</p> : null}</>
}

export default SizeWarning
