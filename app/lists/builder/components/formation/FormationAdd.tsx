import { listState } from "@/app/lists/state"
import { toast } from "react-toastify"
import { FiPlus } from "react-icons/fi"
import { emptyFormation } from "@/app/data/empty_objects"
import { nanoid } from "nanoid"
import Filter from "@lists/builder/components/formation/Filter"
import { setFormation } from "@lists/builder/components/formation/utils"

const FormationAdd = () => {
	const { list, setList } = listState()

	const addFormation = () => {
		const newFormation = { ...emptyFormation, id: nanoid() }
		const newList = { ...list, formations: [...list.formations, newFormation] }
		setList(newList)

		toast.success("Added formation")

		return { newFormation, newList }
	}

	const fillFormation = () => {
		const newFormation = addFormation()
		setFormation(1001, newFormation.newFormation, newFormation.newList, setList)
	}

	return (
		<div className="text-primary-50 flex justify-center items-center gap-4">
			{/* <Filter /> */}
			<div className="builder_title_background flex flex-wrap justify-center items-center text-center gap-4 w-max mx-auto rounded-full px-3 border-4 border-backgrounds-950 hover:border-primary-400">
				<button
					onClick={fillFormation}
					className="p-1 hover:text-primary-400 font-graduate sm:text-xl flex items-center gap-1">
					<FiPlus /> Add formation
					<FiPlus />
				</button>
			</div>
		</div>
	)
}

export default FormationAdd
