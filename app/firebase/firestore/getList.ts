import { db } from "../config"
import { doc, getDoc } from "firebase/firestore"

export const getList = async (listId: string) => {
	const data = await getDoc(doc(db, process.env.NEXT_PUBLIC_FIREBASE_LIST_DB!, listId))
	if (data.exists()) {
		return JSON.parse(data.data().list)
	}
	return null
}
