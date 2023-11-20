"use client";
import React, { useState, useEffect } from "react";
import { formationSlotData } from "@/app/data/formation_slot_data";
import { BUILDER_FORMATION, BUILDER_LIST, SLOTSET } from "@/app/types";
import BuilderDetachment from "./BuilderDetachment";
import { formationData } from "@/app/data/formation_data";
import { setBuilderDetachment, setBuilderDetachmentSlots } from "../utils";

const BuilderFormation = ({
  formation,
  setArmyList,
}: {
  formation: BUILDER_FORMATION;
  setArmyList: React.Dispatch<React.SetStateAction<BUILDER_LIST>>;
}) => {
  const [formationState, setFormationState] = useState(formation);

  const chooseFormation = (id: number) => {
    const selectedFormation = setBuilderDetachment(id, formation.ref_id);
    if (selectedFormation) {
      setFormationState((prev) => {
        return {
          ...prev,
          ...selectedFormation,
        };
      });
    }
    return;
  };

  const TEST = () => {
    setBuilderDetachmentSlots([1000, 1001, 222, 4000, 22, 1011], "testing");
  };

  useEffect(() => {
    setArmyList((prev) => {
      return {
        ...prev,
        formations: [...prev.formations].map((formation) => {
          if (formation.ref_id === formationState.ref_id) {
            return formationState;
          }
          return formation;
        }),
      };
    });
  }, [formationState]);

  return (
    <div className="border-2 border-black rounded-xl flex flex-col items-center">
      <button onClick={TEST} className="text-red-800">
        TESTME
      </button>
      <select
        className="bg-green-950 rounded-t-lg w-full text-center text-xl py-2 font-graduate"
        value={formationState.id}
        onChange={(e) => {
          chooseFormation(Number(e.target.value));
        }}
      >
        <option value="0">SELECT FORMATION</option>
        {formationData.map((formation) => (
          <option
            key={formationState.ref_id + formation.name}
            value={formation.id}
          >
            {formation.name}
          </option>
        ))}
      </select>
      <div className="p-4 w-full">
        {formationState.compulsory ? (
          <div className="w-full text-green-950 flex flex-col items-center border-2 border-black">
            <h1 className="w-full text-center bg-green-950 text-green-50 font-graduate">
              Compulsory slots
            </h1>
            <div className="flex flex-wrap gap-4 p-2">
              {formationState.compulsory.map((slot) => (
                <BuilderDetachment
                  key={slot.slot_ref}
                  slot={slot}
                  slotSet={SLOTSET.compulsory}
                  setFormationState={setFormationState}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
      <div className="p-4 w-full">
        {formationState.optional ? (
          <div className="w-full text-green-950 flex flex-col items-center border-2 border-black">
            <h1 className="w-full text-center bg-green-950 text-green-50 font-graduate">
              Compulsory slots
            </h1>
            <div className="flex flex-wrap gap-4 p-2">
              {formationState.optional.map((slot) => (
                <BuilderDetachment
                  key={slot.slot_ref}
                  slot={slot}
                  slotSet={SLOTSET.optional}
                  setFormationState={setFormationState}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <pre className="w-full border-2 border-green-950 text-green-950 p-8 font-semibold text-lg">
        {JSON.stringify(formationState, null, " ")}
      </pre>
    </div>
  );
};

export default BuilderFormation;
