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
        const listRef = doc(db, "legionbuilder", listData.list_id);
        await setDoc(listRef, {
          list: listString,
          owner: listData.user_id,
          created: serverTimestamp(),
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
