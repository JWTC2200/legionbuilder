import { List, ListDetachment } from "@type/listTypes"
import { findLoadoutBySlotId, findUpgradeBySlotId, findDetachmentSlot } from "../../builder/utils"
import { currentDetachmentSize, totalDetachmentPoints } from "@lists/builder/components/detachment/utils"
import { dataslateSideWidget } from "@lists/state"
import { detachmentData } from "@/app/data/detachment_data"

interface properties {
	list: List
	detachment: ListDetachment
}

const Detachment = ({ list, detachment }: properties) => {
	const { name, slot_id, id, formation_id } = detachment
	const { dataslate, visible, setVisible, setDataslate } = dataslateSideWidget()
	const upgrades = findUpgradeBySlotId(list, slot_id)?.upgrades
	const loadouts = findLoadoutBySlotId(list, slot_id)?.loadouts

	const unitReference = detachmentData.filter((data) => data.id === detachment.id)

	const handleDetachmentSideWidget = () => {
		if (unitReference[0]) {
			if (visible === true && unitReference[0]?.id !== dataslate?.id) {
				setVisible(true)
			} else {
				setVisible(!visible)
			}
			setDataslate(unitReference[0])
		}
	}

	return (
		<div className="text-xs sm:text-base flex flex-col justify-start items-start">
			<button onClick={handleDetachmentSideWidget} className="text-start select-text">
				<h5 className="text-base sm:text-lg">
					<span className="font-bold">
						{detachment.slot_type ? detachment.slot_type : findDetachmentSlot(list, detachment).type}:{" "}
					</span>
					<span className="text-primary-500 hover:text-primary-300 active:text-tertiary-400 font-graduate">
						{name}
					</span>
					{` (${currentDetachmentSize(list, slot_id)}), ${totalDetachmentPoints(list, slot_id)}pts`}
				</h5>
			</button>

			{upgrades?.length || loadouts?.length ? (
				<div className="pl-2 flex flex-col py-1">
					{upgrades &&
						upgrades.map((upgrade, index) => {
							const upgradeCost =
								list.gamemode === "titandeath" && upgrade.td_ek
									? upgrade.td_ek + upgrade.cost
									: upgrade.cost
							return (
								<div
									key={`${id}up${index}`}
									className="">{`${upgrade.number} ${upgrade.name} ${upgradeCost}pts`}</div>
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
