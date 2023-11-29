"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAuthContext } from "@/app/firebase/auth/AuthContext";
import { getUserLists } from "@/app/firebase/firestore/getUserLists";
import { BUILDER_LIST } from "@/app/types";
import { ToastContainer, toast } from "react-toastify";

import { TiClipboard } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import { deleteList } from "@/app/firebase/firestore/deleteList";
import { useRouter } from "next/navigation";

const page = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const [userLists, setUserLists] = useState<BUILDER_LIST[]>([]);

  const addToClipboard = (id: string) => {
    navigator.clipboard.writeText(
      `https://legionbuilder.vercel.app/builder?listId=${id}`
    );
    toast.success("Link added to clipboard");
  };

  const handleDeleteList = (id: string, userId: string) => {
    if (user?.uid === userId) {
      deleteList(id);
      toast.warning("deleting list");
      loadLists();
    } else {
      toast.warning("Do not have permission to delete this list");
    }
  };

  const loadLists = async () => {
    if (user) {
      const lists = (await getUserLists(user.uid)) as BUILDER_LIST[];
      setUserLists(lists);
    }
  };

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
    loadLists();
  }, [user]);

  return (
    <main className="max-w-md">
      <ToastContainer
        autoClose={1000}
        closeOnClick
        toastStyle={{
          backgroundColor: "#052e16",
          border: "white 2px solid",
          borderRadius: "5px",
          color: "#f0fdf4",
        }}
      />
      {userLists.length ? (
        userLists.map((list) => (
          <div key={list.list_id} className="flex flex-wrap">
            <button
              onClick={() => addToClipboard(list.list_id)}
              className="flex items-center text-lg mr-2"
            >
              <TiClipboard />
            </button>
            <Link href={`/builder?listId=${list.list_id}`}>
              <span className="text-lg font-semibold">{list.list_name}</span>,{" "}
              {list.main_faction} {list.points}pts
            </Link>
            <button
              onClick={() => handleDeleteList(list.list_id, list.user_id)}
              className="flex items-center text-lg mr-2"
            >
              <MdDeleteForever />
            </button>
          </div>
        ))
      ) : (
        <h2 className="font-graduate text-xl mt-4">You have no saved lists!</h2>
      )}
    </main>
  );
};

export default page;
