import React from "react";
import { listState } from "../state";
import { ImQuill } from "@react-icons/all-files/im/ImQuill";

const ListBuilderListName = () => {
  const { list, setList } = listState();
  return (
    <div className="text-green-950 font-semibold flex gap-2 justify-center border border-green-950 items-center py-2 px-4 rounded-xl max-w-full">
      <ImQuill />
      <input
        type="text"
        maxLength={25}
        value={list.list_name}
        onChange={(e) => setList({ ...list, list_name: e.target.value })}
        className=" bg-inherit text-center font-graduate text-xl"
      />
      <ImQuill />
    </div>
  );
};

export default ListBuilderListName;
