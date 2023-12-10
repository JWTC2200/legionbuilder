"use client";

import React, { useEffect, useState } from "react";
import { listState } from "../builder/state";
import Link from "next/link";

interface properties {
  className?: string;
}

const CreateListButtons = ({ className }: properties) => {
  const { clearList, setList } = listState();
  const [localList, setLocalList] = useState(false);
  const local =
    typeof window !== "undefined"
      ? localStorage.getItem("legionbuilder")
      : null;
  const handlePreviousList = () => {
    if (local) {
      setList(JSON.parse(local));
    }
  };

  useEffect(() => {
    if (local) {
      setLocalList(true);
    }
  }, []);

  return (
    <div className={className}>
      <Link
        href="/lists/builder"
        className="px-8 py-2 banner_background font-graduate text-lg sm:text-2xl rounded-full border-2 border-backgrounds-950 hover:text-lime-400 active:text-lime-400 hover:border-lime-400 active:border-lime-400"
        onClick={clearList}
      >
        Create List
      </Link>
      {localList ? (
        <Link
          href="/lists/builder"
          onClick={handlePreviousList}
          className="px-8 py-2 banner_background font-graduate text-lg sm:text-2xl rounded-full border-2 border-backgrounds-950 hover:text-lime-400 active:text-lime-400 hover:border-lime-400 active:border-lime-400"
        >
          Previous list
        </Link>
      ) : null}
    </div>
  );
};

export default CreateListButtons;
