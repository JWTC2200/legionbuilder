import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../config"

export const checkCollection = async (user: string) => {
	const q = query(collection(db, process.env.NEXT_PUBLIC_FIREBASE_COLLETION_DB!), where("owner", "==", user))
	const data: string[] = []
	const querySnapshot = await getDocs(q)
	querySnapshot.forEach((doc) => data.push(JSON.parse(doc.data().owner)))
	return data.includes(user) || data.length < 1
}
