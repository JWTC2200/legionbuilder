import { BUILDER_DETACHMENT_UNIT_UPGRADES, SLOTSET, BUILDER_DETACHMENT_UNIT, BUILDER_FORMATION_SLOT } from "@/app/types"
import { detachmentData } from "@/app/data/detachment_data"
import { listState } from "../../state"

interface properties {
	unitId: number
	upgradeOption: BUILDER_DETACHMENT_UNIT_UPGRADES
	slotSet: SLOTSET
	refId: string
	slotRef: string
}

const Upgrades = ({ unitId, upgradeOption, slotSet, refId, slotRef }: properties) => {
	const detachmentUpgrades = detachmentData.find((detachment) => detachment.id === unitId)

	if (!detachmentUpgrades) {
		return null
	}

	const upgradeObject = detachmentUpgrades.upgrade_options?.find((upgrade) => upgrade.name === upgradeOption.name)

	if (!upgradeObject) {
		return null
	}

	const upgradeSelectedHighlight = upgradeOption.number > 0 ? " text-tertiary-800 font-semibold" : ""

	const { list, setList } = listState()
	const newUpgradeObject = (upgradeId: number): BUILDER_DETACHMENT_UNIT_UPGRADES => {
		if (upgradeId) {
			const newUpgrade = upgradeObject.options.find((upgrade) => upgrade.number === upgradeId)!
			return {
				...upgradeOption,
				...newUpgrade,
				number: upgradeId,
			}
		}
		return { ...upgradeOption, number: 0, cost: 0, size: 0 }
	}

	const updateSelectedUnit = (
		oldUnit: BUILDER_DETACHMENT_UNIT,
		newUpgrades: BUILDER_DETACHMENT_UNIT_UPGRADES
	): BUILDER_DETACHMENT_UNIT => {
		const upgradeOptionsArray = oldUnit.upgrade_options.map((upgrade) => {
			if (upgrade.name === newUpgrades.name) {
				return newUpgrades
			}
			return upgrade
		})

		return { ...oldUnit, upgrade_options: upgradeOptionsArray }
	}

	const updateUpgradeSlotArray = (
		detachmentArray: BUILDER_FORMATION_SLOT[],
		newUpgrade: BUILDER_DETACHMENT_UNIT_UPGRADES
	): BUILDER_FORMATION_SLOT[] => {
		const newArray = detachmentArray.map((detach) => {
			if (detach.slot_ref === slotRef) {
				return {
					...detach,
					selected_unit: updateSelectedUnit(detach.selected_unit!, newUpgrade),
				}
			}
			return detach
		})
		return newArray
	}

	const updateUpgradeChoice = (upgradeId: number): void => {
		const newUpgrade = newUpgradeObject(upgradeId)

		const newArmyList = {
			...list,
			formations: list.formations.map((newFormation) => {
				if (newFormation.ref_id === refId) {
					return {
						...newFormation,
						formation_slots: newFormation.formation_slots.map((slot) => {
							if (slot.slot_type === slotSet) {
								return {
									...slot,
									slot: updateUpgradeSlotArray(slot.slot, newUpgrade),
								}
							}
							return slot
						}),
					}
				}
				return newFormation
			}),
		}

		setList(newArmyList)
	}
	return (
		<div className="flex flex-wrap">
			<select
				id={`${slotRef}${upgradeOption.name}`}
				name={`${slotRef}${upgradeOption.name}`}
				value={upgradeOption.number}
				onChange={(e) => {
					updateUpgradeChoice(Number(e.target.value))
				}}
				className={
					"w-full text-center text-sm font-graduate p-1 rounded-full border border-primary-950 hover:text-tertiary-700 active:text-tertiary-700 overflow-auto" +
					upgradeSelectedHighlight
				}>
				<option value="0" className="text-black">
					{upgradeOption.name}
				</option>
				{upgradeObject.options.map((upgrade, index) => (
					<option
						key={slotRef + "upgrade" + upgradeOption.name + index}
						value={upgrade.number}
						className="text-black">
						{upgrade.text
							? `${upgrade.text}`
							: `${upgradeOption.name}: ${upgrade.number}, ${upgrade.cost}pts`}
					</option>
				))}
			</select>
		</div>
	)
}

export default Upgrades
