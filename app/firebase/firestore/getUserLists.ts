import { db } from "../config";
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const getUserLists = async (userId: string) => {
  const q = query(
    collection(db, "legionbuilder"),
    where("owner", "==", userId)
  );
  const data: DocumentData[] = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => data.push(JSON.parse(doc.data().list)));
  return data;
};

export const getUserListsLength = async (userId: string) => {
  const q = query(
    collection(db, "legionbuilder"),
    where("user_id", "==", userId)
  );
  const data: DocumentData[] = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => data.push(doc.data()));
  return data.length;
};
