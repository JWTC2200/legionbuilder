import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";
import { listState } from "../state";
import { handleSaveList } from "../utils";
import { useAuthContext } from "@/app/firebase/auth/AuthContext";
import { saveData } from "@/app/firebase/firestore/saveData";
import { toast } from "react-toastify";

const ListBuilderButtons = () => {
  const { list, clearList } = listState();
  const { user } = useAuthContext();
  const router = useRouter();

  const saveList = async () => {
    handleSaveList(list);
    if (user) {
      if (user.uid === list.user_id) {
        const { uploaded, message } = await saveData(list);
        if (uploaded) {
          toast.success(message);
        } else {
          toast.error("List upload failed");
        }
      } else {
        const newList = { ...list, list_id: nanoid(), user_id: user.uid };
        const { uploaded, message } = await saveData(newList);
        if (uploaded) {
          toast.success(message);
          router.push(`/lists/builder?listId=${newList.list_id}`);
        } else {
          toast.error(message);
        }
      }
    }
  };

  return (
    <div className="w-full flex flex-wrap gap-4 justify-center text-center mt-2">
      <button
        onClick={saveList}
        className=" bg-green-950 text-green-50 px-2 py-1 font-bold font-graduate rounded-lg hover:text-cyan-700"
      >
        SAVE
      </button>
      <Link
        href="/lists/view"
        className=" bg-green-950 text-green-50 px-2 py-1 font-bold font-graduate rounded-lg hover:text-cyan-700"
      >
        View
      </Link>
      <button
        onClick={clearList}
        className=" bg-green-950 text-green-50 px-2 py-1 font-bold font-graduate rounded-lg hover:text-cyan-700"
      >
        Clear
      </button>
    </div>
  );
};

export default ListBuilderButtons;