import { BUILDER_LIST } from "@/app/types";
import { addToClipboard } from "../utils";
import React from "react";
import Link from "next/link";
import { FaCopy } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { listPointTotals } from "../utils";
import { listState } from "../builder/state";

const UserListBox = ({ list }: { list: BUILDER_LIST }) => {
  const { armyTotalPoints } = listPointTotals(list);
  const { setList } = listState();

  return (
    <div
      key={list.list_id}
      className="flex flex-col w-full max-w-[300px] border-2 border-green-950 rounded-xl p-2 dataslate_background text-green-950"
    >
      <div className="flex justify-between items-center p-2">
        <Link
          href="/lists/builder"
          onClick={() => setList(list)}
          className="text-lg font-semibold text-center hover:text-cyan-700 font-graduate"
        >
          {list.list_name}
        </Link>
      </div>
      <div>
        <ol>
          <li>
            {armyTotalPoints}/{list.points}pts
          </li>
          <li>{list.main_faction}</li>
          <li>Formations: {list.formations.length}</li>
        </ol>
      </div>
      <div className="flex justify-between mt-2">
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
          // onClick={() => handleDeleteList(list.list_id, list.user_id)}
          className="flex flex-col justify-center items-center text-lg  hover:text-red-700"
        >
          <MdDeleteForever className="text-4xl" />{" "}
          <span className="text-xs">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default UserListBox;
