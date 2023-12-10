"use client";

import { BUILDER_FORMATION } from "@/app/types";
import React from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { listState } from "../state";

const ListBuilderQuickLinks = ({}: {}) => {
  const { list } = listState();

  return (
    <>
      {list.formations.length ? (
        <div className="w-full text-primary-50 bg-backgrounds-950 flex flex-col py-2 justify-center items-center">
          {list.formations.map((formation, index) => (
            <Link
              href={`#${formation.ref_id}`}
              key={formation.ref_id + "link"}
              className="flex items-center text-center gap-1 hover:text-primary-400 active:text-primary-400"
            >
              <FiChevronDown />
              Formation {index + 1}{" "}
              {formation.name ? `: ${formation.name}` : null}
              <FiChevronDown />
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default ListBuilderQuickLinks;
