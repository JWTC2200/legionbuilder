import { ListFormation } from "@/app/types"
import { listState } from "../../state"
import { toast } from "react-toastify"
import { removeFormation } from "../utils"

const FormationDelete = ({ formation }: { formation: ListFormation }) => {
	const { list, setList } = listState()

	const deleteFormation = () => {
		setList(removeFormation(list, formation))
		toast.warning("Formation removed")
	}

	return (
		<button className="p-1 hover:text-orange-700 font-graduate text-sm sm:text-base" onClick={deleteFormation}>
			Remove
		</button>
	)
}

export default FormationDelete
