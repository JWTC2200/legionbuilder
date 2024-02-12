import { ListDetachment } from "@/app/types/listTypes"
import { listState } from "@lists/state"
import { findDetachmentBySlotId, findLoadoutBySlotId, findUpgradeBySlotId } from "../../builder/utils"

interface properties {
	detachment: ListDetachment
}

const DetachmentDetails = ({ detachment }: properties) => {
	const { list } = listState()

	const upgrades = findUpgradeBySlotId(list, detachment.slot_id)
	const loadouts = findLoadoutBySlotId(list, detachment.slot_id)

	if (!upgrades?.upgrades.length && !loadouts?.loadouts.length) {
		return null
	}

	return (
		<div>
			<div>
				{upgrades
					? upgrades.upgrades.map((upgrade, index) => (
							<div
								key={detachment.slot_id + "upgrade" + index}
								className="capitalize">{`${upgrade.number} ${upgrade.name}`}</div>
						))
					: null}
			</div>
			<div className="flex flex-col gap-1">
				{loadouts
					? loadouts.loadouts.map((loadout, index) => (
							<div key={detachment.slot_id + "loadout" + index} className="capitalize flex items-center gap-2">
								<div className="text-xl">{loadout.number}</div>
								<div>
									{loadout.weapons.map((set, index2) => (
										<div
											key={
												detachment.slot_id + "loadout" + index + "set" + index2
											}>{`${set.location}: ${set.weapon}`}</div>
									))}
								</div>
							</div>
						))
					: null}
			</div>
		</div>
	)
}

export default DetachmentDetails
