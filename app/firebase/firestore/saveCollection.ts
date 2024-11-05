import { CollectionList } from "@app/tools/collection/state"
import { db } from "@app/firebase/config"
import { doc, serverTimestamp, setDoc } from "firebase/firestore"

export const saveCollection = async (collection: CollectionList) => {
	try {
		const collectionRef = doc(db, process.env.NEXT_PUBLIC_FIREBASE_COLLECTION_DB!, collection.owner)
		await setDoc(collectionRef, { ...collection, created: serverTimestamp() }, { merge: true })
		return { uploaded: true, message: "Collection saved" }
	} catch (error) {
		return { uploaded: false, message: "Failed to save collection" }
	}
}

export default saveCollection
