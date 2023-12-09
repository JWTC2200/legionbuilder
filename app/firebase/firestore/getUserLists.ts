import { BUILDER_LIST } from "@/app/types";
import { db } from "../config";
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

export const getUserLists = async (userId: string) => {
  const q = query(collection(db, "lists"), where("owner", "==", userId));
  const data: DocumentData[] = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => data.push(JSON.parse(doc.data().list)));
  return data;
};

export const checkUploadPermission = async (listData: BUILDER_LIST) => {
  const q = query(
    collection(db, "lists"),
    where("owner", "==", listData.user_id)
  );
  const data: string[] = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) =>
    data.push(JSON.parse(doc.data().list).list_id)
  );
  if (data.includes(listData.list_id) || data.length < 10) {
    return true;
  }
  return false;
};
