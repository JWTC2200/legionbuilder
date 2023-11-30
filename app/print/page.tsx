"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { BUILDER_LIST } from "../types";
import { formationPoints, listPoints } from "../builder/utils";
import { formationHTML } from "./util";
import { getList } from "../firebase/firestore/getList";

const page = () => {
  const searchParams = useSearchParams();
  const [armyList, setArmyList] = useState<BUILDER_LIST | null>(null);
  const [failureMessage, setFailureMessage] = useState<string | null>(null);

  useEffect(() => {
    const listParams = searchParams.get("listId");

    const getDblist = async (id: string) => {
      const data: any = await getList(id);
      if (data) {
        setArmyList(data);
      } else {
        setFailureMessage("Could not find list");
      }
    };

    if (listParams) {
      getDblist(listParams);
    } else {
      const list =
        typeof window !== undefined
          ? JSON.parse(localStorage.getItem("legionbuilder")!)
          : null;
      setArmyList(list as BUILDER_LIST);
    }
  }, []);

  return (
    <main className="w-full min-h-screen bg-slate-50 text-green-950 p-4 flex justify-center">
      {armyList ? (
        <div className="w-full max-w-screen-lg">
          <div className="mb-2">
            <h1 className="font-bold font-subrayada text-xl">
              {armyList.list_name}
            </h1>
            <h2 className="font-bold font-graduate">
              List total:{" "}
              {listPoints(armyList).allyFactionPoints +
                listPoints(armyList).mainFactionPoints}{" "}
              points
            </h2>
            <h2 className="font-bold font-graduate">
              Main faction: {armyList.main_faction}
            </h2>
          </div>
          {armyList.formations.map((formation, index) => (
            <div key={"formaton" + index} className="text-sm mb-2">
              <h3 className="text-base">
                <strong>Formation {index + 1}</strong>: {formation.name}
                {", "}
                {formationPoints(formation)}points
              </h3>
              {formationHTML(formation)}
            </div>
          ))}
        </div>
      ) : (
        <main className="w-full min-h-screen bg-slate-50 justify-center items-center text-center">
          {failureMessage ? <p>{failureMessage}</p> : <h2>No list found</h2>}
        </main>
      )}
    </main>
  );
};

export default page;
