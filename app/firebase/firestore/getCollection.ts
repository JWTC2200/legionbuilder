import { collection, doc, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore"
import { db } from "@/app/firebase/config"
import { CollectionList, collectionState } from "@app/collection/state"

export const getCollection = async (user: string) => {
	const q = query(collection(db, process.env.NEXT_PUBLIC_FIREBASE_COLLECTION_DB!), where("owner", "==", user))

	const querySnapshot = await getDocs(q)
	const listId: CollectionList[] = []
	querySnapshot.forEach((doc) => {
		listId.push(doc.data() as CollectionList)
	})

	return listId
}

export default getCollection
