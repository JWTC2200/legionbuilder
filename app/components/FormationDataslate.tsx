import React from "react";
import { FORMATION } from "../types";
import { formationSlotData } from "../data/formation_slot_data";
import { getDetachmentIcons } from "../utils/detachmentIcons";

const FormationDataslate = (formation: FORMATION) => {
  return (
    <article className="max-w-screen-xl p-2 border-2 border-black dataslate_background rounded-lg">
      <div className="border-2 border-black bg-green-950 text-green-50 py-1 px-3 mb-2">
        <h2 className="text-2xl text-center font-graduate font-bold">
          {formation.name}
        </h2>
      </div>
      {formation.compulsory ? (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl w-full text-center font-graduate font-bold bg-green-950 text-green-50 py-1 px-3 mb-2">
            Compulsory Detachments:
          </h2>
          <div className="text-green-950 flex flex-wrap justify-center items-center gap-4 m-2">
            {formation.compulsory.sort().map((detachment, index) => {
              const foundSlot = formationSlotData.find(
                (slot) => slot.id === detachment
              );
              if (foundSlot) {
                return (
                  <div
                    key={"compulsory" + index}
                    className="flex flex-col justify-center items-center text-center bg-green-950 text-green-950 w-40 h-32 p-2 border-2 border-black rounded-xl dataslate_background"
                  >
                    <span className="text-3xl">
                      {getDetachmentIcons(foundSlot.type)}
                    </span>
                    <p className="font-semibold font-graduate">
                      {foundSlot.type}
                    </p>
                    {foundSlot.description ? (
                      <p className="italic text-sm">{foundSlot.description}</p>
                    ) : null}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      ) : null}
      {formation.optional ? (
        <div className="flex flex-col items-center">
          <h2 className="text-xl w-full text-center font-graduate font-bold bg-green-950 text-green-50 py-1 px-3 mb-2">
            Optional detachments:
          </h2>
          <div className="text-green-950 flex flex-wrap justify-center items-center gap-4 m-2">
            {formation.optional.sort().map((detachment, index) => {
              const foundSlot = formationSlotData.find(
                (slot) => slot.id === detachment
              );
              if (foundSlot) {
                return (
                  <div
                    key={"optional" + index}
                    className="flex flex-col justify-center items-center text-center bg-green-950 text-green-950 w-40 h-32 p-2 border-2 border-black rounded-xl dataslate_background"
                  >
                    <span className="text-3xl">
                      {getDetachmentIcons(foundSlot.type)}
                    </span>
                    <p className="font-semibold font-graduate">
                      {foundSlot.type}
                    </p>
                    {foundSlot.description ? (
                      <p className="italic text-sm">{foundSlot.description}</p>
                    ) : null}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      ) : null}
      {formation.choice
        ? formation.choice.map((choice, index) => (
            <div
              key={"choiceset" + index}
              className="flex flex-col items-center"
            >
              <h2 className="text-xl w-full text-center font-graduate font-bold bg-green-950 text-green-50 py-1 px-3 mb-2">
                One of the following:
              </h2>
              <div className="text-green-950 flex flex-wrap justify-center items-center gap-4 m-2">
                {choice.sort().map((detachment, index2) => {
                  const foundSlot = formationSlotData.find(
                    (slot) => slot.id === detachment
                  );
                  if (foundSlot) {
                    return (
                      <div
                        key={"choice" + index2}
                        className="flex flex-col justify-center items-center text-center text-green-950 w-40 h-32 p-2 border-2 border-black rounded-xl dataslate_background"
                      >
                        <span className="text-3xl">
                          {getDetachmentIcons(foundSlot.type)}
                        </span>
                        <p className="font-semibold font-graduate">
                          {foundSlot.type}
                        </p>
                        {foundSlot.description ? (
                          <p className="italic text-sm">
                            {foundSlot.description}
                          </p>
                        ) : null}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ))
        : null}
    </article>
  );
};

export default FormationDataslate;
