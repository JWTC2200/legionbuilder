import { listState } from "../../state"
import { nanoid } from "nanoid"
import { toast } from "react-toastify"
import { BUILDER_FORMATION } from "@/app/types"

export const DuplicateBtn = ({ formation }: { formation: BUILDER_FORMATION }) => {
	const { list, setList } = listState()

	const duplicateFormation = () => {
		const duplicate = { ...formation, ref_id: `formation${nanoid()}` }
		setList({ ...list, formations: [...list.formations, duplicate] })
		toast.success(`${formation.name} duplicated`)
	}

	return (
		<button className="p-1 hover:text-orange-700 font-graduate text-sm sm:text-base" onClick={duplicateFormation}>
			Duplicate
		</button>
	)
}

export default DuplicateBtn
