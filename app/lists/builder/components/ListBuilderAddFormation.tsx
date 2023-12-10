import React from "react";
import { BUILDER_FORMATION } from "@/app/types";
import { nanoid } from "nanoid";
import { listState } from "../state";
import { toast } from "react-toastify";
import { FiPlus } from "react-icons/fi";

const ListBuilderAddFormation = () => {
  const { list, setList } = listState();

  const addFormation = () => {
    const newFormation: BUILDER_FORMATION = {
      name: "",
      ref_id: `formation${nanoid()}`,
      id: 0,
      faction: null,
      choice: null,
      compulsory: null,
      optional: null,
    };
    const newList = { ...list, formations: [...list.formations, newFormation] };
    setList(newList);
    toast.success("Added formation");
  };

  return (
    <div className="w-full text-primary-50 flex flex-col justify-center gap-2">
      <div className="builder_title_background flex flex-wrap justify-center items-center text-center gap-4 w-max mx-auto rounded-full px-3 border-4 border-primary-900 hover:border-primary-400">
        <button
          onClick={addFormation}
          className="p-1 hover:text-primary-400 font-graduate sm:text-xl flex items-center gap-1"
        >
          <FiPlus /> Add formation
          <FiPlus />
        </button>
      </div>
    </div>
  );
};

export default ListBuilderAddFormation;
