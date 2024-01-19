"use client"

import React from "react"
import { BUILDER_DETACHMENT_SLOT, SLOTSET, SUBFACTION_TYPE } from "@/app/types"
import DetachmentTitle from "./DetachmentTitle"
import DetachmentDetails from "./DetachmentDetails"
import DetachmentDescription from "./DetachmentDescription"
import DetachmentSelect from "./DetachmentSelect"
import DetachmentUpgrades from "./DetachmentUpgrades"
import DetachmentSizeWarning from "./DetachmentSizeWarning"
import { format } from "path"
import DetachmentSubfactionWarning from "./DetachmentSubfactionWarning"

interface properties {
	formationSubfaction?: SUBFACTION_TYPE
	detachmentSlot: BUILDER_DETACHMENT_SLOT
	slotSet: SLOTSET
}

const Detachment = ({ formationSubfaction, detachmentSlot, slotSet }: properties) => {
	return (
		<div className="flex flex-col w-full sm:w-[450px]">
			<DetachmentTitle slotType={detachmentSlot.type} />
			{detachmentSlot.description ? <DetachmentDescription text={detachmentSlot.description} /> : null}
			{detachmentSlot.selected_unit ? (
				<>
					<DetachmentSubfactionWarning selectedUnit={detachmentSlot.selected_unit} formationSubfaction={formationSubfaction} />
					<DetachmentSizeWarning selectedUnit={detachmentSlot.selected_unit} />
					<DetachmentDetails selectedUnit={detachmentSlot.selected_unit} />
				</>
			) : null}
			<div className="px-2">
				<DetachmentSelect formationSubfaction={formationSubfaction} detachmentSlot={detachmentSlot} slotSet={slotSet} />
				{detachmentSlot.selected_unit && detachmentSlot.selected_unit.upgrade_options ? (
					<div className="flex flex-col gap-1">
						{detachmentSlot.selected_unit.upgrade_options.map((option, index) => (
							<DetachmentUpgrades key={detachmentSlot.slot_ref + "upgrades" + index} unitId={detachmentSlot.selected_unit!.id} upgradeOption={option} slotSet={slotSet} refId={detachmentSlot.ref_id} slotRef={detachmentSlot.slot_ref} />
						))}
					</div>
				) : null}
			</div>
		</div>
	)
}

export default Detachment
