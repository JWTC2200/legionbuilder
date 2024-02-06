import { List, ListDetachment } from "@/app/types"
import React from "react"
import { findLoadoutBySlotId, findUpgradeBySlotId } from "../../builder/utils"
import { currentDetachmentSize, totalDetachmentPoints } from "../../builder/components/detachment/utils"

interface properties {
	list: List
	detachment: ListDetachment
}

const Detachment = ({ list, detachment }: properties) => {
	const { name, slot_id, id, formation_id } = detachment
	const upgrades = findUpgradeBySlotId(list, slot_id)?.upgrades
	const loadouts = findLoadoutBySlotId(list, slot_id)?.loadouts

	return (
		<div className="text-xs sm:text-sm flex flex-col justify-start items-start">
			<h5 className="text-sm sm:text-md">
				<span className="font-bold">{detachment.slot_type}:</span>
				{` ${name} (${currentDetachmentSize(list, slot_id)}), ${totalDetachmentPoints(list, slot_id)}pts`}
			</h5>
			{upgrades?.length || loadouts?.length ? (
				<div className="pl-2 flex flex-col py-1">
					{upgrades &&
						upgrades.map((upgrade, index) => {
							return (
								<div
									key={`${id}up${index}`}
									className="">{`${upgrade.number} ${upgrade.name} ${upgrade.cost}pts`}</div>
							)
						})}
					{loadouts &&
						loadouts.map((loadout, index) => {
							return (
								<ol key={`${slot_id}ld${index}`} className="flex items-center flex-wrap">
									<span className="pr-1">x{loadout.number}</span>
									{loadout.weapons.map((weapons, index2) => {
										const { location, weapon, cost } = weapons
										return (
											<li
												key={`${slot_id}ld${index}wp${index2}`}
												className="text-xs sm:text-sm pr-1">
												<span className="font-semibold">{location}</span>
												{`: ${weapon} ${cost ? `${cost}pts` : ""}`}
											</li>
										)
									})}
								</ol>
							)
						})}
				</div>
			) : null}
		</div>
	)
}

export default Detachment
