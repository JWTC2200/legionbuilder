"use client";

import React, { useEffect } from "react";
import { loadLists } from "./utils";
import { userListsState } from "./state";
import NotSignedIn from "./components/NotSignedIn";
import UserListTable from "./components/UserListTable";
import useAuthState from "../Auth";
import CreateListButtons from "./components/CreateListButtons";

const page = () => {
  const userUid = useAuthState((state) => state.uid);
  const { userLists, setUserLists } = userListsState();

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
    <div className="flex flex-col items-center max-w-2xl w-full">
      <CreateListButtons className="flex my-4 gap-4 justify-center items-center" />
      {userLists.length && userUid ? (
        <>
          <header className="bg-stone-900 px-4 py-2 self-start">
            <h1 className="text-lime-500 text-xl font-graduate">Lists</h1>
          </header>

          <UserListTable />
        </>
      ) : (
        <h2 className="font-graduate text-xl">
          {userUid ? "You have no saved lists!" : <NotSignedIn />}
        </h2>
      )}
    </div>
  );
};

export default page;
