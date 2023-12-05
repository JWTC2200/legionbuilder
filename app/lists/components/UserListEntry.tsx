"use client";

import { BUILDER_LIST } from "@/app/types";
import React from "react";
import Link from "next/link";
import { listState } from "../builder/state";

const UserListEntry = ({ list }: { list: BUILDER_LIST }) => {
  const { setList } = listState();
  return (
    <div className="flex flex-col odd:bg-stone-100 even:bg-stone-300 text-stone-950 py-1 group">
      <Link href="/lists/builder" onClick={() => setList(list)}>
        <h3 className="block font-graduate font-bold uppercase border-b group-odd:border-stone-400 group-even:border-stone-500 px-4 py-1 overflow-hidden">
          <span className={"whitespace-nowrap"}>{list.list_name}</span>
        </h3>
      </Link>
      <div className="flex border-b group-odd:border-stone-300 group-even:border-stone-400 last:border-0 py-1 group/profile">
        <div className="basis-[16%]"></div>
        <div className="basis-[12%] text-center"></div>
        <div className="basis-[12%] text-center"></div>
        <div className="basis-[12%] text-center"></div>
        <div className="basis-[48%] flex flex-wrap grow-0"></div>
      </div>
    </div>
  );
};

export default UserListEntry;
