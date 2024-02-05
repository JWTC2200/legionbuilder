import { ListDetachmentSlot } from "@/app/types"
import { listState } from "@/app/lists/state"
import { findLoadoutBySlotId, findUpgradeBySlotId } from "../../utils"

interface properties {
	detachmentSlot: ListDetachmentSlot
}

const DetachmentDetails = ({ detachmentSlot }: properties) => {
	const { list } = listState()
	const upgrades = findUpgradeBySlotId(list, detachmentSlot.id)
	const loadouts = findLoadoutBySlotId(list, detachmentSlot.id)

	return (
		<div>
			{upgrades?.upgrades.length ? (
				<div className="px-4">
					{upgrades.upgrades.map((upgrade, index) => {
						const { number, name, cost } = upgrade
						return <div key={detachmentSlot.id + "updetail" + index}>{`${number} ${name}: ${cost}pts`}</div>
					})}
				</div>
			) : null}
			{loadouts?.loadouts.length ? (
				<div className="px-4 flex flex-col gap-1 text-primary-50 font-graduate">
					{loadouts.loadouts.map((loadout, index) => {
						const { number, weapons } = loadout
						return (
							<div
								key={detachmentSlot.id + "lddetail" + index}
								className="flex bg-secondary-800 clip-path-octagon-md py-1">
								<div className="flex justify-center items-center text-primary-50 px-2 bg-secondary-800 ">{`x${number}`}</div>
								<div className="">
									{weapons.map((weapons, index) => {
										const { location, weapon, cost } = weapons
										return <div>{`${location}: ${weapon}, ${cost}pts`}</div>
									})}
								</div>
							</div>
						)
					})}
				</div>
			) : null}
		</div>
	)
}

export default DetachmentDetails
