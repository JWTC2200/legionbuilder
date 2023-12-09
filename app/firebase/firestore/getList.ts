import { BUILDER_LIST } from "@/app/types";

import { db } from "../config";
import { doc, getDoc } from "firebase/firestore";

export const getList = async (listId: string) => {
  const data = await getDoc(doc(db, "lists", listId));
  if (data.exists()) {
    return JSON.parse(data.data().list);
  }
  return null;
};
