import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { listState } from "../state";
import SaveListButton from "./SaveListButton";

const ListBuilderButtons = () => {
  const { clearList } = listState();
  const searchParams = useSearchParams();
  const listParams = searchParams.get("listId");

  return (
    <div className="w-full flex flex-wrap gap-4 justify-center text-center mt-2">
      <SaveListButton className="bg-backgrounds-950 text-backgrounds-50 px-2 py-1 font-bold font-graduate rounded-lg hover:text-primary-400">
        Save
      </SaveListButton>
      <Link
        href={`/lists/view${listParams ? `?listId=${listParams}` : ""}`}
        className=" bg-primary-950 text-primary-50 px-2 py-1 font-bold font-graduate rounded-lg hover:text-primary-400"
      >
        View
      </Link>
      <button
        onClick={clearList}
        className=" bg-primary-950 text-primary-50 px-2 py-1 font-bold font-graduate rounded-lg hover:text-primary-400"
      >
        Clear
      </button>
    </div>
  );
};

export default ListBuilderButtons;
