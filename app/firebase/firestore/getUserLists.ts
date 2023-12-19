import { DB_ENTRY } from "@/app/types"
import { db } from "../config"
import { collection, query, where, onSnapshot } from "firebase/firestore"

export const getUserLists = (setLists: (lists: DB_ENTRY[]) => void, userUid: string) => {
	const q = query(collection(db, "lists"), where("owner", "==", userUid))
	const userLists = onSnapshot(q, (querySnapshot) => {
		const data: DB_ENTRY[] = []
		querySnapshot.forEach((doc) => {
			data.push({ ...doc.data(), list: JSON.parse(doc.data().list) } as DB_ENTRY)
		})
		setLists(data)
	})
	return userLists
}

export default getUserLists
