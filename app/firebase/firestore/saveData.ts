import { List } from "@/app/types/listTypes"
import { db } from "../config"
import { setDoc, doc, serverTimestamp } from "firebase/firestore"
import checkUploadPermission from "./checkUploadPermission"

export const saveData = async (listData: List) => {
	try {
		const permission = await checkUploadPermission(listData)
		if (!permission) {
			return { uploaded: false, message: "Too many lists!" }
		} else {
			try {
				const listString = JSON.stringify(listData)
				const listRef = doc(db, "lists", listData.id)
				console.log("sending")
				await setDoc(listRef, {
					list: listString,
					owner: listData.user,
					created: serverTimestamp(),
					game_size: listData.points,
					main_faction: listData.faction,
					name: listData.name,
					formations: listData.formations.length,
				}),
					{ merge: true }
				return { uploaded: true, message: "List saved to account" }
			} catch (error) {
				return { uploaded: false, message: "Failed to save list" }
			}
		}
	} catch (error) {
		return { uploaded: false, message: "Failed to connect" }
	}
}
