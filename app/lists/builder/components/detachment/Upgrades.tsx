import { detachmentData } from "@/app/data/detachment_data"
import { listState } from "@/app/lists/state"
import { sideMenuTitle } from "./utils"
import { List, ListUpgrade, ListUpgrades } from "@/app/types"

interface properties {
	slot_id: string | null
}

const Upgrades = ({ slot_id }: properties) => {
	const { list, setList } = listState()

	const upgradeSlot = list.upgrades.find((slot) => slot.slot_id === slot_id)

	if (!upgradeSlot) {
		return sideMenuTitle("Could not find any upgrades")
	}
	if (!upgradeSlot.id) {
		return sideMenuTitle("No unit selected")
	}

	const detachmentInfo = detachmentData.find((detachment) => detachment.id === upgradeSlot.id)

	if (!detachmentInfo) {
		return sideMenuTitle("Could not find any upgrades")
	}

	const updateUpgrades = (e: number, name: string) => {
		if (e) {
			const newUpgrade: ListUpgrade = {
				name: name,
				...detachmentInfo.upgrade_options
					.find((upgrade) => upgrade.name === name)!
					.options.find((option) => option.number === e)!,
			}

			const newUpgradeSlot: ListUpgrades = {
				...upgradeSlot,
				upgrades: [...upgradeSlot.upgrades.filter((up) => up.name !== newUpgrade.name), newUpgrade],
			}

			const newList: List = {
				...list,
				upgrades: [...list.upgrades.filter((upgrade) => upgrade.slot_id !== slot_id), newUpgradeSlot],
			}

			setList(newList)
		} else {
			const deletedUpgradeArray: ListUpgrades[] = list.upgrades.map((upgradeSlot) => {
				if (upgradeSlot.slot_id === slot_id) {
					return {
						...upgradeSlot,
						upgrades: upgradeSlot.upgrades.filter((upgrade) => upgrade.name !== name),
					}
				}
				return upgradeSlot
			})

			setList({ ...list, upgrades: deletedUpgradeArray })
		}
	}

	const selectMenus = detachmentInfo.upgrade_options.map((upgrade, index) => {
		const selectValue = upgradeSlot.upgrades.find((up) => up.name === upgrade.name)
		return (
			<select
				key={upgradeSlot.slot_id + "menuSelect" + index}
				onChange={(e) => {
					updateUpgrades(Number(e.target.value), upgrade.name)
				}}
				value={selectValue ? selectValue.number : "0"}
				className="w-full text-center text-sm font-graduate p-1 rounded-full border border-primary-950 hover:text-tertiary-700 active:text-tertiary-700 overflow-auto text-black">
				<option value="0" className="text-black">
					{upgrade.name}
				</option>
				{upgrade.options.map((option, index2) => (
					<option
						key={upgradeSlot.slot_id + "menuSelect" + index + "option" + index2}
						value={option.number}
						className="text-black">
						{`${upgrade.name} ${option.number}: ${option.cost}pts`}{" "}
					</option>
				))}
			</select>
		)
	})

	return (
		<>
			{sideMenuTitle(detachmentInfo.name)}
			{selectMenus.length ? selectMenus : <div className="font-graduate">This unit has no upgrades</div>}
		</>
	)
}

export default Upgrades
