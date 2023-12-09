import { BUILDER_LIST } from "@/app/types";

import { db } from "../config";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { checkUploadPermission } from "./getUserLists";

export const saveData = async (listData: BUILDER_LIST) => {
  try {
    const permission = await checkUploadPermission(listData);
    if (!permission) {
      return { uploaded: false, message: "Too many lists!" };
    } else {
      try {
        const listString = JSON.stringify(listData);
        const listRef = doc(db, "lists", listData.list_id);
        await setDoc(listRef, {
          list: listString,
          owner: listData.user_id,
          created: serverTimestamp(),
          game_size: listData.points,
          main_faction: listData.main_faction,
          name: listData.list_name,
          formations: listData.formations.length,
        }),
          { merge: true };
        return { uploaded: true, message: "List saved to account" };
      } catch (error) {
        return { uploaded: false, message: "Failed to save list" };
      }
    }
  } catch (error) {
    return { uploaded: false, message: "Failed to connect" };
  }
};
