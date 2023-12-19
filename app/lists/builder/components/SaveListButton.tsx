import React from "react"
import { handleSaveList } from "../utils"
import { listState } from "../state"
import useAuthState from "@/app/Auth"
import { saveData } from "@/app/firebase/firestore/saveData"
import { toast } from "react-toastify"
import { nanoid } from "nanoid"
import { useRouter } from "next/navigation"

interface properties {
	className?: string
	children?: React.ReactNode
}

const SaveListButton = ({ className, children }: properties) => {
	const { list } = listState()
	const userUid = useAuthState((state) => state.uid)
	const router = useRouter()

	const saveList = async () => {
		handleSaveList(list)
		if (userUid) {
			if (userUid === list.user_id) {
				const { uploaded, message } = await saveData(list)
				if (uploaded) {
					toast.success(message)
				} else {
					toast.error(message)
				}
			} else {
				const newList = { ...list, list_id: nanoid(), user_id: userUid }
				const { uploaded, message } = await saveData(newList)
				if (uploaded) {
					toast.success(message)
					router.push(`/lists/builder?listId=${newList.list_id}`)
				} else {
					toast.error(message)
				}
			}
		}
	}

	return (
		<button onClick={saveList} className={className} name="savelistbutton" id="savelistbutton">
			{children}
		</button>
	)
}

export default SaveListButton
