import React from "react";
import UserListEntry from "./UserListEntry";
import { userListsState } from "../state";

function UserListTable() {
  const { userLists } = userListsState();
  return (
    <section className="h-full w-full max-w-4xl dataslate_background flex flex-col mt-2">
      {userLists.map((list) => (
        <UserListEntry key={list.list_id} list={list} />
      ))}
    </section>
  );
}

export default UserListTable;
