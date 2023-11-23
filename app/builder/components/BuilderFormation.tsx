"use client";
import React, { useState, useEffect } from "react";

import { BUILDER_FORMATION, BUILDER_LIST, SLOTSET } from "@/app/types";
import BuilderDetachment from "./BuilderDetachment";
import { formationData } from "@/app/data/formation_data";
import { setBuilderDetachment, formationPoints } from "../utils";

import { ToastContainer, toast } from "react-toastify";

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
    return;
  };

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
    <div className="sm:border-2 border-black sm:rounded-xl flex flex-col items-center">
      <ToastContainer autoClose={1000} closeOnClick />
      <div className="w-full bg-green-950 sm:rounded-t-lg flex flex-wrap justify-center items-center text-center px-2">
        {/* FORMATION SELECTOR -> DISABLED AFTER FIRST CHOICE */}

        <select
          className="bg-green-950 sm:rounded-t-lg sm:text-xl py-2 font-graduate text-center"
          value={formation.id}
          onChange={(e) => {
            chooseFormation(Number(e.target.value));
          }}
        >
          <option value="0">SELECT FORMATION</option>
          {formationData.map((format) => (
            <option key={formation.ref_id + format.name} value={format.id}>
              {format.name}
            </option>
          ))}
        </select>
        {formation.id ? (
          <h3 className="bg-green-950 sm:rounded-t-lg sm:text-xl py-2 px-4 font-graduate text-center">
            {formationPoints(formation)} points
          </h3>
        ) : null}

        <button
          className="p-1 hover:text-cyan-700 font-graduate text-sm sm:text-base"
          onClick={removeFormation}
        >
          Remove
        </button>
      </div>
      {formation.id ? null : (
        <p className="text-green-950 my-4">Please select a formation</p>
      )}

      {/* COMPULSORY SECTION */}

      {formation.compulsory ? (
        <div className="w-full mt-2">
          <div className="w-full text-green-950 flex flex-col items-center">
            <h1 className="w-full text-center bg-green-950 text-green-50 font-graduate">
              ~ Compulsory slots ~
            </h1>
            <div className="flex flex-wrap gap-2 py-2 sm:py-4 sm:px-2 justify-center">
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
      {/* OBJECT DISPLAY */}
      {/* <pre className="w-full border-2 border-green-950 text-green-950 p-8 font-semibold text-lg">
        {JSON.stringify(formation, null, " ")}
      </pre> */}
    </div>
  );
};

export default BuilderFormation;
