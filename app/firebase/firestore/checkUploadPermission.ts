import { List } from "@type/listTypes"
import { db } from "../config"
import { collection, getDocs, query, where } from "firebase/firestore"

export const checkUploadPermission = async (listData: List) => {
	const q = query(collection(db, process.env.NEXT_PUBLIC_FIREBASE_LIST_DB!), where("owner", "==", listData.user))
	const data: string[] = []
	const querySnapshot = await getDocs(q)
	querySnapshot.forEach((doc) => data.push(JSON.parse(doc.data().list).list_id))
	if (data.includes(listData.id) || data.length < 10) {
		return true
	}
	return false
}

export default checkUploadPermission
