import React from "react";
import { BUILDER_LIST } from "@/app/types";
import { addToClipboard } from "../utils";
import { FaCopy } from "react-icons/fa6";

const ListCopyButton = ({ list }: { list: BUILDER_LIST }) => {
  return (
    <button
      onClick={() =>
        addToClipboard(
          `https://legionbuilder.app/lists/builder?listId=${list.list_id}`
        )
      }
      className="flex flex-col justify-center items-center text-lg hover:text-tertiary-700"
    >
      <FaCopy className="" />
    </button>
  );
};

export default ListCopyButton;
