"use client";

import React, { useState } from "react";

import { BUILDER_FORMATION, BUILDER_LIST, SLOTSET } from "@/app/types";
import BuilderDetachment from "./BuilderDetachment";
import { formationData } from "@/app/data/formation_data";
import { setBuilderDetachment, formationPoints } from "../utils";

import { toast } from "react-toastify";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";

const BuilderFormation = ({
  formation,
  setArmyList,
}: {
  formation: BUILDER_FORMATION;
  setArmyList: React.Dispatch<React.SetStateAction<BUILDER_LIST>>;
}) => {
  const chooseFormation = (id: number) => {
    const selectedFormation = id
      ? setBuilderDetachment(id, formation.ref_id)
      : {
          ...formation,
          name: "",
          id: 0,
          choice: null,
          compulsory: null,
          optional: null,
        };
    if (selectedFormation) {
      setArmyList((prev) => {
        return {
          ...prev,
          formations: [...prev.formations].map((forma) => {
            if (forma.ref_id === formation.ref_id) {
              return { ...forma, ...selectedFormation };
            }
            return forma;
          }),
        };
      });
    }
  };

  const [viewFormation, setViewFormation] = useState(true);

  const removeFormation = () => {
    setArmyList((prev) => {
      const filteredList = prev.formations.filter(
        (form) => form.ref_id !== formation.ref_id
      );
      return {
        ...prev,
        formations: filteredList,
      };
    });
    toast.warning("Formation removed");
  };

  return (
    <div
      id={formation.ref_id}
      className="sm:border-4 border-green-950 sm:rounded-xl flex flex-col items-center"
    >
      {/* FORMATION SELECTOR*/}
      <div className="w-full bg-green-950 sm:rounded-t-lg flex flex-wrap  justify-center sm:justify-between items-center text-center px-2">
        {/* Hide formation button */}
        <button
          type="button"
          onClick={() => {
            setViewFormation((prev) => !prev);
          }}
          className="text-xl sm:text-3xl my-1 hover:text-cyan-700"
        >
          {viewFormation ? <FaRegSquareMinus /> : <FaRegSquarePlus />}
        </button>
        <div className="flex flex-wrap sm:gap-4 items-center justify-center">
          <select
            className="bg-green-950 sm:text-xl py-2 font-graduate text-center max-w-[300px] sm:max-w-[400px] lg:max-w-full"
            value={formation.id}
            onChange={(e) => {
              chooseFormation(Number(e.target.value));
            }}
          >
            <option value="0" className="text-green-50">
              SELECT FORMATION
            </option>
            {formationData.map((format) => (
              <option
                key={formation.ref_id + format.name}
                value={format.id}
                className="text-green-50"
              >
                {format.name}
              </option>
            ))}
          </select>
          {formation.id ? (
            <h3 className="bg-green-950 sm:rounded-t-lg sm:text-xl py-2 font-graduate text-center">
              {formationPoints(formation)} points
            </h3>
          ) : null}
        </div>
        <button
          className="p-1 hover:text-orange-700 font-graduate text-sm sm:text-base"
          onClick={removeFormation}
        >
          Remove
        </button>
      </div>
      {formation.id ? null : (
        <p className="text-red-600 font-semibold my-1">
          Please select a formation
        </p>
      )}

      {/* VIEW TOGGLE */}
      {viewFormation ? (
        <>
          {/* COMPULSORY SECTION */}
          {formation.compulsory ? (
            <div className="w-full mt-2">
              <div className="w-full text-green-950 flex flex-col items-center">
                <h1 className="w-full text-center bg-green-950 text-green-50 font-graduate">
                  ~ Compulsory slots ~
                </h1>
                {formation.compulsory.filter(
                  (compSlot) => compSlot.selected_unit
                ).length < formation.compulsory.length ? (
                  <div className="text-red-600 pt-2 font-semibold">
                    Compulsory detachments missing!
                  </div>
                ) : null}
                <div className="flex flex-wrap gap-2 py-2 sm:px-2 justify-center">
                  {formation.compulsory.map((slot) => (
                    <BuilderDetachment
                      key={slot.slot_ref}
                      detachmentSlot={slot}
                      faction={formation.faction}
                      slotSet={SLOTSET.compulsory}
                      setArmyList={setArmyList}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {/* OPTIONAL SECTION */}
          {formation.optional ? (
            <div className="w-full">
              <div className="w-full text-green-950 flex flex-col items-center">
                <h1 className="w-full text-center bg-green-950 text-green-50 font-graduate">
                  ~ Optional slots ~
                </h1>
                <div className="flex flex-wrap gap-2 py-2 sm:py-4 sm:px-2 justify-center">
                  {formation.optional.map((slot) => (
                    <BuilderDetachment
                      key={slot.slot_ref}
                      detachmentSlot={slot}
                      faction={formation.faction}
                      slotSet={SLOTSET.optional}
                      setArmyList={setArmyList}
                    />
                  ))}
                </div>
              </div>{" "}
            </div>
          ) : null}

          {/* CHOICE SECTIONS */}
          {formation.choice ? (
            <div className="w-full flex flex-col">
              {formation.choice.map((choiceSet, index) => (
                <div
                  key={formation.ref_id + "choiceSet" + index}
                  className="w-full text-green-950 flex flex-col items-center "
                >
                  <h1 className="w-full text-center bg-green-950 text-green-50 font-graduate">
                    ~ Choose up to one of the following ~
                  </h1>
                  {formation.choice![index].filter(
                    (choiceSlot) => choiceSlot.selected_unit
                  ).length > 1 ? (
                    <div className="text-red-600 pt-2 font-semibold">
                      Selected too many detachments!
                    </div>
                  ) : null}
                  <div className="flex flex-wrap gap-2 py-2 sm:py-4 sm:px-2 justify-center">
                    {choiceSet.map((slot) => (
                      <BuilderDetachment
                        key={slot.slot_ref}
                        detachmentSlot={slot}
                        faction={formation.faction}
                        slotSet={SLOTSET.choice}
                        setArmyList={setArmyList}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </>
      ) : null}

      {/* OBJECT DISPLAY */}
      {/* <pre className="w-full border-2 border-green-950 text-green-950 p-8 font-semibold text-lg">
        {JSON.stringify(formation, null, " ")}
      </pre> */}
    </div>
  );
};

export default BuilderFormation;
