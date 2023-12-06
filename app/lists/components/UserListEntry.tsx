"use client";

import { BUILDER_LIST } from "@/app/types";
import React from "react";
import Link from "next/link";
import { listState } from "../builder/state";
import ListCopyButton from "./ListCopyButton";
import ListDeleteButton from "./ListDeleteButton";
import { listPointTotals } from "../utils";

const UserListEntry = ({ list }: { list: BUILDER_LIST }) => {
  const { setList } = listState();
  const { mainFactionPoints, allyFactionPoints, armyTotalPoints } =
    listPointTotals(list);

  return (
    <div className="flex flex-col odd:bg-stone-100 even:bg-stone-300 text-stone-950 py-1 group">
      <div className="flex gap-2 justify-between items-center font-graduate font-bold uppercase border-b group-odd:border-stone-400 group-even:border-stone-500 px-4 py-1 overflow-hidden">
        <Link href="/lists/builder" onClick={() => setList(list)}>
          <h3>
            <span className={"whitespace-nowrap"}>{list.list_name}</span>
          </h3>
        </Link>
        <div className="flex gap-2">
          <ListCopyButton list={list} />
          <ListDeleteButton list={list} />
        </div>
      </div>

      <div className="flex border-b group-odd:border-stone-300 group-even:border-stone-400 last:border-0 py-1 group/profile">
        <div className="basis-[16%]">{list.main_faction}</div>
        <div className="basis-[12%] text-center">
          {armyTotalPoints + " / " + list.points}pts
        </div>
        <div className="basis-[12%] text-center">
          {list.formations.length} formation
          {list.formations.length === 1 ? null : "s"}
        </div>
        <div className="basis-[12%] text-center"></div>
        <div className="basis-[48%] flex flex-wrap grow-0"></div>
      </div>
    </div>
  );
};

export default UserListEntry;
