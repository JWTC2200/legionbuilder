"use client";

import React, { useState } from "react";
import { listState } from "../state";
import { handleSaveList } from "../utils";
import Link from "next/link";
import SaveListButton from "./SaveListButton";

import { TbChevronCompactLeft, TbChevronCompactRight } from "react-icons/tb";
import { ImBin } from "react-icons/im";
import { FiPrinter, FiSave } from "react-icons/fi";

const BuilderWidgetSide = () => {
  const { list, clearList } = listState();
  const [sideWidget, setSideWidget] = useState(false);
  const widgetWidth = sideWidget ? "w-80" : "w-8";

  return (
    <div
      className={
        `fixed flex flex-wrap justify-center items-center lg:hidden bg-secondary-800 text-secondary-50  h-24  right-0 bottom-32 rounded-l-lg text-3xl transition-all z-20` +
        " " +
        widgetWidth
      }
    >
      {sideWidget ? (
        <div className="flex flex-wrap justify-evenly items-center text-center w-10/12 transition-all">
          <SaveListButton className="bg-white p-2 rounded-full hover:bg-tertiary-700 active:bg-tertiary-700 z-50 text-secondary-800">
            <FiSave />
          </SaveListButton>
          <Link
            href="/lists/view"
            className="bg-white p-2 rounded-full hover:bg-tertiary-700 active:bg-tertiary-700 z-50 text-secondary-800"
          >
            <FiPrinter />
          </Link>
          <button
            onClick={clearList}
            className="bg-white p-2 rounded-full hover:bg-tertiary-700 active:bg-tertiary-700 z-50 text-secondary-800"
          >
            <ImBin />
          </button>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => {
          setSideWidget((prev) => !prev);
        }}
        className={
          "p-2 rounded-full hover:text-tertiary-700 active:text-tertiary-700 text-white"
        }
      >
        {sideWidget ? <TbChevronCompactRight /> : <TbChevronCompactLeft />}
      </button>
    </div>
  );
};

export default BuilderWidgetSide;
