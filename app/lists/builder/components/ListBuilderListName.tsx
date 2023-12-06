import React from "react";
import { ImQuill } from "react-icons/im";
import { listState } from "../state";

const ListBuilderListName = () => {
  const { list, setList } = listState();
  return (
    <div className="text-primary-950 font-semibold flex gap-2 justify-center border border-primary-950 items-center py-2 px-4 rounded-xl max-w-full">
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
