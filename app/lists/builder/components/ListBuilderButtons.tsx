import React from "react";
import Link from "next/link";
import { listState } from "../state";
import { handleSaveList } from "../utils";

const ListBuilderButtons = () => {
  const { list, clearList } = listState();

  return (
    <div className="w-full flex flex-wrap gap-4 justify-center text-center mt-2">
      <button
        onClick={() => handleSaveList(list)}
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
