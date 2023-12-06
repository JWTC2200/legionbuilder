"use client";

import React, { useEffect } from "react";
import { loadLists } from "./utils";
import { userListsState } from "./state";
import { listState } from "./builder/state";
import Link from "next/link";
import NotSignedIn from "./components/NotSignedIn";
import UserListTable from "./components/UserListTable";
import useAuthState from "../Auth";

const page = () => {
  const userUid = useAuthState((state) => state.uid);
  const { userLists, setUserLists } = userListsState();
  const { clearList } = listState();

  useEffect(() => {
    const getLists = async () => {
      const fetchedLists = await loadLists(userUid);
      setUserLists(fetchedLists);
    };
    if (userUid) {
      getLists();
    }
  }, [userUid]);

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
          {userUid ? "You have no saved lists!" : <NotSignedIn />}
        </h2>
      )}
    </div>
  );
};

export default page;
