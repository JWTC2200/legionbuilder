"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAuthContext } from "@/app/firebase/auth/AuthContext";
import { getUserLists } from "@/app/firebase/firestore/getUserLists";
import { BUILDER_LIST } from "@/app/types";
import { ToastContainer, toast } from "react-toastify";

import { listPoints } from "@/app/builder/utils";

import { FaCopy } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { deleteList } from "@/app/firebase/firestore/deleteList";
import { useRouter } from "next/navigation";

const page = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const [userLists, setUserLists] = useState<BUILDER_LIST[]>([]);

  const addToClipboard = (link: string) => {
    navigator.clipboard.writeText(link);
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
    if (user) {
      loadLists();
    }
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
        <div className="flex flex-wrap justify-center">
          <div className="w-full flex justify-center">
            <h2 className="text-center text-xl font-graduate my-4 underline">
              Your saved lists:{" "}
            </h2>
          </div>

          {userLists.map((list) => (
            <div
              key={list.list_id}
              className="flex flex-col w-full max-w-[300px] border-2 border-green-950 rounded-xl p-2 dataslate_background  text-green-950"
            >
              <div className="flex justify-between items-center p-2">
                <Link
                  href={`/builder?listId=${list.list_id}`}
                  className="text-lg font-semibold text-center hover:text-cyan-700 font-graduate"
                >
                  {list.list_name}
                </Link>
              </div>
              <div>
                <ul>
                  <li>
                    {listPoints(list).allyFactionPoints +
                      listPoints(list).mainFactionPoints}
                    /{list.points}pts
                  </li>
                  <li>{list.main_faction}</li>
                  <li>Formations: {list.formations.length}</li>
                </ul>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      addToClipboard(
                        `https://legionbuilder.vercel.app/builder?listId=${list.list_id}`
                      )
                    }
                    className="flex flex-col justify-center items-center text-lg hover:text-cyan-700"
                  >
                    <FaCopy className="text-4xl" />
                    <span className="text-xs">Builder link</span>
                  </button>
                  <button
                    onClick={() =>
                      addToClipboard(
                        `https://legionbuilder.vercel.app/print?listId=${list.list_id}`
                      )
                    }
                    className="flex flex-col justify-center items-center text-lg hover:text-cyan-700"
                  >
                    <FaCopy className="text-4xl" />
                    <span className="text-xs">Print link</span>
                  </button>
                </div>
                <button
                  onClick={() => handleDeleteList(list.list_id, list.user_id)}
                  className="flex flex-col justify-center items-center text-lg  hover:text-red-700"
                >
                  <MdDeleteForever className="text-4xl" />{" "}
                  <span className="text-xs">Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="font-graduate text-xl mt-4">
          {user ? "You have no saved lists!" : "You are not logged in"}
        </h2>
      )}
    </main>
  );
};

export default page;
