import { BUILDER_LIST } from "@/app/types";

import { db } from "../config";
import { setDoc, doc } from "firebase/firestore";
import { getUserListsLength } from "./getUserLists";

export const saveData = async (listData: BUILDER_LIST) => {
  try {
    const data = await getUserListsLength(listData.user_id);
    if (data >= 5) {
      return { uploaded: false, message: "Too many lists!" };
    } else {
      try {
        const listString = JSON.stringify(listData);
        const listRef = doc(db, "legionbuilder", listData.list_id);
        await setDoc(listRef, { list: listString, owner: listData.user_id }),
          { merge: true };
        return { uploaded: true, message: "List saved!" };
      } catch (error) {
        return { uploaded: false, message: "Failed to save list" };
      }
    }
  } catch (error) {
    return { uploaded: false, message: "Failed to check user lists" };
  }
};
