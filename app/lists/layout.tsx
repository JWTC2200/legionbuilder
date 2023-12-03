"use client";

import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { listState } from "./builder/state";
import { BUILDER_LIST } from "../types";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { setList } = listState();

  useEffect(() => {
    const localList = localStorage.getItem("legionbuilder");
    if (localList) {
      setList(JSON.parse(localList) as BUILDER_LIST);
    }
  }, []);

  return (
    <main className="max-w-screen-2xl w-full">
      <ToastContainer
        autoClose={1000}
        closeOnClick
        toastStyle={{
          backgroundColor: "#052e16",
          border: "white 2px solid",
          borderRadius: "5px",
          color: "#f0fdf4",
        }}
      />
      {children}
    </main>
  );
};

export default layout;
