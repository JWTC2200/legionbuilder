import useAuthState from "@/app/Auth"
import { listState } from "../../state"
import { useRouter } from "next/navigation"
import { saveData } from "@/app/firebase/firestore/saveData"
import { toast } from "react-toastify"
import { nanoid } from "nanoid"

interface properties {
	className?: string
	children?: React.ReactNode
}

const SaveListBtn = ({ className, children }: properties) => {
	const { list } = listState()
	const userUid = useAuthState((state) => state.uid)
	const router = useRouter()

	const handleSave = async () => {
		if (!userUid) {
			toast.warning("You are not logged in")
			return
		}
		if (userUid === list.user) {
			const { uploaded, message } = await saveData(list)
			if (uploaded) {
				toast.success(message)
			} else {
				toast.error(message)
			}
		} else {
			const newList = { ...list, id: nanoid(), user: userUid }
			const { uploaded, message } = await saveData(newList)
			if (uploaded) {
				toast.success(message)
				router.push(`/lists/builder?listId=${newList.id}`)
			} else {
				toast.error(message)
			}
		}
	}

	return (
		<button className={className} onClick={handleSave}>
			{children}
		</button>
	)
}

export default SaveListBtn
