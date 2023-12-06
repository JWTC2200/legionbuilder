import React from "react";
import UserListEntry from "./UserListEntry";
import { userListsState } from "../state";

function UserListTable() {
  const { userLists } = userListsState();
  return (
    <section className="h-full w-full dataslate_background flex flex-col">
      {userLists.map((list) => (
        <UserListEntry key={list.list_id} list={list} />
      ))}
    </section>
  );
}

export default UserListTable;
