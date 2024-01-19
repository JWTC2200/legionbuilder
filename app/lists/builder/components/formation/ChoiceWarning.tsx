import { BUILDER_DETACHMENT_SLOT } from "@/app/types"
import React from "react"

const ChoiceWarning = ({ array, index }: { array: BUILDER_DETACHMENT_SLOT[]; index: number }) => {
	return <>{array.filter((slot) => slot.selected_unit).length > 1 ? <div className="text-red-600 pt-2 font-semibold">Selected too many detachments!</div> : null}</>
}

export default ChoiceWarning
