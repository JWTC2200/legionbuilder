import { ListDetachmentSlot } from "@type/listTypes"
import { listState } from "@/app/lists/state"
import { detachmentData } from "@/app/data/detachment_data"
import { getSelectorIdArray, updateAllSlotInfo, filterBySubfactions, filterByAllegiance } from "./utils"
import { toast } from "react-toastify"

interface properties {
	detachmentSlot: ListDetachmentSlot
}

const DetachmentSelector = ({ detachmentSlot }: properties) => {
	const { list, setList } = listState()

	const formationSubfaction = list.formations.find(
		(formation) => formation.id === detachmentSlot.formation_id
	)!.subfaction

	const compulsory = list.formations
		.find((formation) => formation.id === detachmentSlot.formation_id)!
		.detachment_groups.find((group) => group.type === "compulsory")!
		.detachment_slots.filter((slot) => slot.id === detachmentSlot.id).length

	const detachment = list.detachments.find((detachment) => detachment.slot_id === detachmentSlot.id)!

	const subfactionFiltered = filterBySubfactions(getSelectorIdArray(detachmentSlot), formationSubfaction, detachment)

	const allegianceFiltered = filterByAllegiance(subfactionFiltered, list.allegiance, detachment)

	const selectorOptions = allegianceFiltered.map((option, index) => {
		const cost = list.gamemode === "titandeath" && option.td_ek ? option.base_cost + option.td_ek : option.base_cost
		return (
			<option key={detachmentSlot.id + "option" + index} value={option.id}>
				{cost}pts: {option.name}
			</option>
		)
	})

	const selectDetachment = (e: number) => {
		if (!e) {
			setList(updateAllSlotInfo(list, detachment, "clear"))
		} else {
			const data = detachmentData.find((detachment) => detachment.id === e)!
			if (!data) {
				toast.error("Error with detachment")
				return
			}
			setList(updateAllSlotInfo(list, detachment, data))
		}
	}

	const nullOption = () => {
		if (!compulsory) {
			return <option value={"0"}>Select Detachment</option>
		}

		if (selectorOptions.length === 0 || selectorOptions.length > 1) {
			return <option value={"0"}>Select Detachment</option>
		}

		return null
	}

	return (
		<select
			value={detachment && detachment.id ? detachment.id : "0"}
			onChange={(e) => selectDetachment(Number(e.target.value))}
			className={
				"w-full text-center py-1 px-2 border bg-secondary-700 border-primary-950 font-graduate text-secondary-300 hover:text-tertiary-300 active:text-tertiary-400 " +
				(detachment?.id && "text-tertiary-500 font-semibold")
			}>
			{nullOption()}
			{selectorOptions}
		</select>
	)
}

export default DetachmentSelector
