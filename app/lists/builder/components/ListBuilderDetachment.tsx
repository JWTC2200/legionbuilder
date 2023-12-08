"use client";

import React from "react";
import { BUILDER_DETACHMENT_SLOT, SLOTSET, SUBFACTION_TYPE } from "@/app/types";
import ListBuilderDetachmentTitle from "./ListBuilderDetachmentTitle";
import ListBuilderDetachmentDetails from "./ListBuilderDetachmentDetails";
import ListBuilderDetachmentDescription from "./ListBuilderDetachmentDescription";
import ListBuilderDetachmentSelect from "./ListBuilderDetachmentSelect";
import ListBuilderDetachmentUpgrades from "./ListBuilderDetachmentUpgrades";
import ListBuilderDetachmentSizeWarning from "./ListBuilderDetachmentSizeWarning";
import { format } from "path";
import ListBuilderDetachmentSubfactionWarning from "./ListBuilderDetachmentSubfactionWarning";

interface properties {
  formationSubfaction?: SUBFACTION_TYPE;
  detachmentSlot: BUILDER_DETACHMENT_SLOT;
  slotSet: SLOTSET;
}

const ListBuilderDetachment = ({
  formationSubfaction,
  detachmentSlot,
  slotSet,
}: properties) => {
  return (
    <div className="flex flex-col w-full sm:w-[450px]">
      <ListBuilderDetachmentTitle slotType={detachmentSlot.type} />
      {detachmentSlot.description ? (
        <ListBuilderDetachmentDescription text={detachmentSlot.description} />
      ) : null}
      {detachmentSlot.selected_unit ? (
        <>
          <ListBuilderDetachmentSubfactionWarning
            selectedUnit={detachmentSlot.selected_unit}
            formationSubfaction={formationSubfaction}
          />
          <ListBuilderDetachmentSizeWarning
            selectedUnit={detachmentSlot.selected_unit}
          />
          <ListBuilderDetachmentDetails
            selectedUnit={detachmentSlot.selected_unit}
          />
        </>
      ) : null}
      <div className="px-2">
        <ListBuilderDetachmentSelect
          formationSubfaction={formationSubfaction}
          detachmentSlot={detachmentSlot}
          slotSet={slotSet}
        />
        {detachmentSlot.selected_unit &&
        detachmentSlot.selected_unit.upgrade_options ? (
          <div className="flex flex-col gap-1">
            {detachmentSlot.selected_unit.upgrade_options.map(
              (option, index) => (
                <ListBuilderDetachmentUpgrades
                  key={detachmentSlot.slot_ref + "upgrades" + index}
                  unitId={detachmentSlot.selected_unit!.id}
                  upgradeOption={option}
                  slotSet={slotSet}
                  refId={detachmentSlot.ref_id}
                  slotRef={detachmentSlot.slot_ref}
                />
              )
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ListBuilderDetachment;
