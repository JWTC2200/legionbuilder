"use client";

import React from "react";
import { addToClipboard } from "../../utils";
import { FaCopy } from "@react-icons/all-files/fa/FaCopy";
import { listState } from "../../builder/state";
import { useSearchParams } from "next/navigation";

interface properties {
  className?: string;
  children: React.ReactNode;
}

const ViewLinkButton = ({ className, children }: properties) => {
  const { list } = listState();
  const searchParams = useSearchParams();
  const listParams = searchParams.get("listId");

  return (
    <button
      type="button"
      onClick={() =>
        addToClipboard(
          `https://legionbuilder.app/lists/view?listId=${list.list_id}`
        )
      }
      className={className}
    >
      <FaCopy /> {children}
    </button>
  );
};

export default ViewLinkButton;
