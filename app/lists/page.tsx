"use client";

import React, { useEffect } from "react";
import { useAuthContext } from "../firebase/auth/AuthContext";
import { loadLists } from "./utils";
import { userListsState } from "./state";
import UserListBox from "./components/UserListBox";
import { listState } from "./builder/state";
import Link from "next/link";
import NotSignedIn from "./components/NotSignedIn";
import UserListTable from "./components/UserListTable";

const page = () => {
  const { user } = useAuthContext();
  const { userLists, setUserLists } = userListsState();
  const { clearList } = listState();

  useEffect(() => {
    const getLists = async () => {
      const fetchedLists = await loadLists(user!);
      setUserLists(fetchedLists);
    };
    if (user) {
      getLists();
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center gap-2">
      <Link
        href="/lists/builder"
        className="px-8 py-2 mt-4 banner_background font-graduate text-lg sm:text-2xl rounded-full border-2 border-green-950 hover:text-cyan-700 active:text-cyan-700 hover:border-cyan-700 active:border-cyan-700"
        onClick={clearList}
      >
        New List
      </Link>
      {userLists.length ? (
        <UserListTable />
      ) : (
        <h2 className="font-graduate text-xl">
          {user ? "You have no saved lists!" : <NotSignedIn />}
        </h2>
      )}
    </div>
  );
};

export default page;
