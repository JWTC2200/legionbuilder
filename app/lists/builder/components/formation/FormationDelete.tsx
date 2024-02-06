import { useState } from "react"
import { ListFormation } from "@/app/types/listTypes"
import { listState } from "../../../state"
import { toast } from "react-toastify"
import { removeFormation } from "../../utils"

const FormationDelete = ({ formation }: { formation: ListFormation }) => {
	const { list, setList } = listState()
	const [clearCheck, setClearCheck] = useState(false)
	const clearBtnStyle = "px-4 py-1 rounded-md "

	const handleClearFormation = () => {
		setClearCheck(false)
		deleteFormation()
	}

	const deleteFormation = () => {
		setList(removeFormation(list, formation))
		toast.warning("Formation removed")
	}

	return (
		<>
			<button
				className="p-1 hover:text-orange-700 font-graduate text-sm sm:text-base"
				onClick={() => setClearCheck(true)}>
				Remove
			</button>
			{clearCheck && (
				<div className="fixed top-1/4 translate-x-1/2 right-1/2 banner_background font-graduate p-8 rounded-xl flex flex-col gap-4">
					<div>Remove formation?</div>
					<div className="flex justify-around items-center gap-2">
						<button
							onClick={() => {
								setClearCheck(false)
							}}
							className={clearBtnStyle + "bg-primary-600 hover:bg-primary-700 active:bg-primary-500"}>
							Cancel
						</button>
						<button
							onClick={handleClearFormation}
							className={clearBtnStyle + "bg-red-600 hover:bg-red-700 active:bg-red-500"}>
							Remove
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default FormationDelete
