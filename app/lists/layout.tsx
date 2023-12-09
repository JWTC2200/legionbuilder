"use client";

import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { listState } from "./builder/state";
import { ALLEGIANCE, BUILDER_LIST } from "../types";
import { useSearchParams } from "next/navigation";
import { getList } from "../firebase/firestore/getList";
import { toast } from "react-toastify";
import Main from "../components/Main";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { setList } = listState();
  const searchParams = useSearchParams();
  const listParams = searchParams.get("listId");

  useEffect(() => {
    const localList = localStorage.getItem("legionbuilder");

    const getDblist = async (id: string) => {
      const data: any = await getList(id);
      if (data) {
        setList({ ...data, allegiance: ALLEGIANCE.neutral });
      } else {
        toast.error("Could not find linked list");
      }
    };

    if (listParams) {
      getDblist(listParams);
    } else {
      if (localList) {
        const local = JSON.parse(localList) as BUILDER_LIST;
        setList({ ...local, allegiance: ALLEGIANCE.neutral });
      }
    }
  }, [listParams]);

  return (
    <Main className="sm:max-w-screen-2xl w-full flex flex-col items-center">
      <ToastContainer
        autoClose={800}
        closeOnClick
        toastStyle={{
          backgroundColor: "#052e16",
          border: "white 2px solid",
          borderRadius: "5px",
          color: "#f0fdf4",
        }}
        pauseOnFocusLoss={false}
      />
      {children}
    </Main>
  );
};

export default layout;
