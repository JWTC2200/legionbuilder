"use client"

import React from "react"
import { detachmentSize, detachmentPoints } from "../../../utils"
import { BUILDER_DETACHMENT_UNIT } from "@/app/types"
import ReferencePopup from "@/app/lists/components/ReferencePopup"

const DetachmentDetails = ({ selectedUnit }: { selectedUnit: BUILDER_DETACHMENT_UNIT }) => {
	return (
		<div className="w-full flex flex-wrap gap-2 sm:gap-4 justify-center items-center relative">
			<ReferencePopup detachmentId={selectedUnit.id} />
			<p className="text-sm sm:text-base font-graduate ">Detachment size: {detachmentSize(selectedUnit)}</p>
			<p className="text-sm font-graduate font-bold border-b underline">
				{detachmentPoints(selectedUnit)}
				<span className="font-normal">pts</span>
			</p>
		</div>
	)
}

export default DetachmentDetails
