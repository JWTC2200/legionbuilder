import { useState } from "react"
import { listState } from "../../state"
import useAuthState from "@/app/Auth"
import SaveListBtn from "./SaveListBtn"
import { toast } from "react-toastify"

const ListButtons = () => {
	const { clearList } = listState()
	const userUid = useAuthState((state) => state.uid)
	const [clearCheck, setClearCheck] = useState(false)
	const buttonStyles =
		" bg-backgrounds-950 text-primary-50 px-2 py-1 font-bold font-graduate rounded-lg hover:text-primary-600 active:text-primary-400"
	const clearBtnStyle = "px-4 py-1 rounded-md "

	return (
		<div className="w-full flex flex-wrap gap-4 justify-center text-center mt-2">
			{userUid && <SaveListBtn className={buttonStyles}>Save</SaveListBtn>}
			<button className={buttonStyles}>View</button>
			<button onClick={() => setClearCheck(true)} className={buttonStyles}>
				Clear
			</button>
			{clearCheck && (
				<div className="fixed top-1/4 banner_background font-graduate p-8 rounded-xl flex flex-col gap-4">
					<div>Do you want to clear the list?</div>
					<div className="flex justify-around items-center gap-2">
						<button
							onClick={() => {
								setClearCheck(false)
							}}
							className={clearBtnStyle + "bg-primary-600 hover:bg-primary-700 active:bg-primary-500"}>
							Cancel
						</button>
						<button
							onClick={() => {
								setClearCheck(false)
								clearList()
								toast.warning("List cleared")
							}}
							className={clearBtnStyle + "bg-red-600 hover:bg-red-700 active:bg-red-500"}>
							Clear
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default ListButtons
