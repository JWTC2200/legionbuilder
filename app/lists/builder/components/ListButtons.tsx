import { useState } from "react"
import { listModelState, listState } from "../../state"
import useAuthState from "@/app/Auth"
import SaveListBtn from "./SaveListBtn"
import { toast } from "react-toastify"
import Link from "next/link"
import { FaSave } from "@react-icons/all-files/fa/FaSave"
import { FaEye } from "@react-icons/all-files/fa/FaEye"
import { ImBin } from "@react-icons/all-files/im/ImBin"
import { FaListAlt } from "@react-icons/all-files/fa/FaListAlt"
import { useSearchParams } from "next/navigation"

const ListButtons = () => {
	const searchParams = useSearchParams()
	const listParams = searchParams.get("listId")
	const { list, clearList } = listState()
	const userUid = useAuthState((state) => state.uid)
	const [clearCheck, setClearCheck] = useState(false)
	const { visible, setVisible } = listModelState()

	const buttonStyles =
		" banner_background text-primary-50 px-4 py-2 font-bold font-graduate rounded-lg hover:text-primary-500 active:text-primary-400 flex items-center"
	const clearBtnStyle = "px-4 py-1 rounded-md "

	return (
		<div className="w-full flex flex-wrap gap-4 justify-center text-center mt-2">
			<button onClick={() => setVisible(!visible)} className={buttonStyles}>
				<FaListAlt />
			</button>
			{userUid && (
				<SaveListBtn className={buttonStyles}>
					<FaSave />
				</SaveListBtn>
			)}
			<Link href={`/lists/view${listParams ? `?listId=${listParams}` : ""}`} className={buttonStyles}>
				<FaEye />
			</Link>
			<button onClick={() => setClearCheck(true)} className={buttonStyles}>
				<ImBin />
			</button>
			{clearCheck && (
				<div className="fixed top-1/4 banner_background font-graduate p-8 rounded-xl flex flex-col gap-4 z-30">
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
								clearList(list)
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
