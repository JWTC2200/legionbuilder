"use client";
import React, { useState, useEffect } from "react";
import { formationSlotData } from "@/app/data/formation_slot_data";
import { BUILDER_FORMATION, BUILDER_LIST } from "@/app/types";
import BuilderDetachment from "./BuilderDetachment";

const BuilderFormation = ({
  formation,
  setArmyList,
}: {
  formation: BUILDER_FORMATION;
  setArmyList: React.Dispatch<React.SetStateAction<BUILDER_LIST>>;
}) => {
  const [formationState, setFormationState] = useState(formation);

  useEffect(() => {
    setArmyList((prev) => {
      return {
        ...prev,
        formations: [...prev.formations].map((formation) => {
          if (formation.id === formationState.id) {
            return formationState;
          }
          return formation;
        }),
      };
    });
  }, [formationState]);

  return (
    <div className="border-2 border-black rounded-xl flex flex-col items-center">
      <h3 className="bg-green-950 rounded-t-lg w-full text-center text-xl py-2 font-graduate">
        {formation.name}
      </h3>
      {/* COMPULSORY SLOTS */}
      {formation.compulsory ? (
        <div className="mx-4 border-2 border-black w-full flex flex-wrap justify-center items-center gap-4 p-4">
          {/* {formation.compulsory.map((slot, index) => (
            <BuilderDetachment
              key={"compulsorydetachment" + index}
              slot={slot}
            />
          ))} */}
        </div>
      ) : null}
    </div>
  );
};

export default BuilderFormation;
