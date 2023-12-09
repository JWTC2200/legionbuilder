import { db } from "../config";
import { doc, deleteDoc } from "firebase/firestore";

export const deleteList = async (listId: string) => {
  await deleteDoc(doc(db, "lists", listId));
};
