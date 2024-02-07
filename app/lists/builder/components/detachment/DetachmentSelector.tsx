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

	const detachment = list.detachments.find((detachment) => detachment.slot_id === detachmentSlot.id)!

	const selectedStyling = detachment?.id && " text-tertiary-800 font-semibold"

	const subfactionFiltered = filterBySubfactions(getSelectorIdArray(detachmentSlot), formationSubfaction, detachment)

	const allegianceFiltered = filterByAllegiance(subfactionFiltered, list.allegiance, detachment)

	const selectorOptions = allegianceFiltered.map((option, index) => (
		<option key={detachmentSlot.id + "option" + index} value={option.id} className="text-black">
			{option.base_cost}pts: {option.name}
		</option>
	))

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

	return (
		<select
			value={detachment && detachment.id ? detachment.id : "0"}
			onChange={(e) => selectDetachment(Number(e.target.value))}
			className={
				"w-full text-center py-1 px-2 border border-primary-950 font-graduate text-secondary-900 hover:text-tertiary-700 active:text-tertiary-700" +
				selectedStyling
			}>
			<option value={"0"} className="text-black">
				Select Detachment
			</option>
			{selectorOptions}
		</select>
	)
}

export default DetachmentSelector
