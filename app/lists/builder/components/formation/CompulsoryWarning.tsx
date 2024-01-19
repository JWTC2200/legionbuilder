import { BUILDER_DETACHMENT_SLOT } from "@/app/types"
import React from "react"

const CompulsoryWarning = ({ array }: { array: BUILDER_DETACHMENT_SLOT[] }) => {
	return (
		<>
			{array.filter((slot) => slot.selected_unit).length < array.length ? (
				<div className="text-red-600 pt-2 font-semibold">
					Compulsory detachments missing!
				</div>
			) : null}
		</>
	)
}

export default CompulsoryWarning
