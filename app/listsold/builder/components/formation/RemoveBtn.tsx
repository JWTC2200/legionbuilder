import { listState } from "../../state"
import { toast } from "react-toastify"
import { BUILDER_FORMATION } from "@/app/types"

const RemoveBtn = ({ formation }: { formation: BUILDER_FORMATION }) => {
	const { list, setList } = listState()
	const removeFormation = () => {
		const filteredList = list.formations.filter((form) => form.ref_id !== formation.ref_id)
		setList({
			...list,
			formations: filteredList,
		})
		toast.warning("Formation removed")
	}

	return (
		<button className="p-1 hover:text-orange-700 font-graduate text-sm sm:text-base" onClick={removeFormation}>
			Remove
		</button>
	)
}

export default RemoveBtn
