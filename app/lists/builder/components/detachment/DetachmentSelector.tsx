import { ListDetachmentSlot } from "@/app/types"
import { listState } from "@/app/lists/state"

interface properties {
	detachmentSlot: ListDetachmentSlot
}

const DetachmentSelector = ({ detachmentSlot }: properties) => {
	const { list, setList } = listState()

	const formationSubfaction = list.formations.find(
		(formation) => formation.id === detachmentSlot.formation_id
	)?.subfaction

	const detachment = list.detachments.find((detachment) => detachment.slot_id === detachmentSlot.id)

	const selectedStyling = detachment?.id && " text-tertiary-800 font-semibold"

	const selectDetachment = (e: number) => {}

	return (
		<select
			value={detachment && detachment.id ? detachment.id : 0}
			onChange={(e) => selectDetachment(Number(e.target.value))}
			className={
				"w-full text-center py-1 px-2 border border-primary-950 font-graduate hover:text-tertiary-700 active:text-tertiary-700" +
				selectedStyling
			}>
			<option value={"0"} className="text-black">
				Select Detachment
			</option>
			{/* {selectOptions} */}
		</select>
	)
}

export default DetachmentSelector
