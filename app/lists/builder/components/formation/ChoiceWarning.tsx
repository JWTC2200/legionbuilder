import { BUILDER_DETACHMENT_SLOT } from "@/app/types"

const ChoiceWarning = ({ array }: { array: BUILDER_DETACHMENT_SLOT[] }) => {
	return <>{array.filter((slot) => slot.selected_unit).length > 1 ? <div className="text-red-600 pt-2 font-semibold">Selected too many detachments!</div> : null}</>
}

export default ChoiceWarning
