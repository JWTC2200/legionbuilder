"use client";

import { BUILDER_FORMATION, SLOTSET } from "@/app/types";
import React, { useState } from "react";
import ListBuilderFormationSelector from "./ListBuilderFormationSelector";
import ListBuilderDetachment from "./ListBuilderDetachment";
import ListBuilderFormationToggle from "./ListBuilderFormationToggle";
import ListBuilderFormationRemoveBtn from "./ListBuilderFormationRemoveBtn";

const ListBuilderFormation = ({
  formation,
}: {
  formation: BUILDER_FORMATION;
}) => {
  const [viewFormation, setViewFormation] = useState<boolean>(true);

  return (
    <div
      id={formation.ref_id}
      className="sm:border-4 border-green-950 sm:rounded-xl flex flex-col items-center"
    >
      <div className="w-full banner_background sm:rounded-t-lg flex flex-wrap  justify-center sm:justify-between items-center text-center px-2">
        <ListBuilderFormationToggle
          view={viewFormation}
          toggle={setViewFormation}
        />
        <ListBuilderFormationSelector formation={formation} />
        <ListBuilderFormationRemoveBtn formation={formation} />
      </div>
      {viewFormation ? (
        <>
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
                    <ListBuilderDetachment
                      key={slot.slot_ref}
                      detachmentSlot={slot}
                      slotSet={SLOTSET.compulsory}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : null}
          {formation.optional ? (
            <div className="w-full">
              <div className="w-full text-green-950 flex flex-col items-center">
                <h1 className="w-full text-center bg-green-950 text-green-50 font-graduate">
                  ~ Optional slots ~
                </h1>
                <div className="flex flex-wrap gap-2 py-2 sm:py-4 sm:px-2 justify-center">
                  {formation.optional.map((slot) => (
                    <ListBuilderDetachment
                      key={slot.slot_ref}
                      detachmentSlot={slot}
                      slotSet={SLOTSET.optional}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : null}
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
                      <ListBuilderDetachment
                        key={slot.slot_ref}
                        detachmentSlot={slot}
                        slotSet={SLOTSET.choice}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default ListBuilderFormation;
