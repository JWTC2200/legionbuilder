"use client";

import React, { useState, useEffect } from "react";
import {
  BUILDER_FORMATION,
  BUILDER_DETACHMENT_SLOT,
  SLOTSET,
  DETACHMENT,
  BUILDER_DETACHMENT_UNIT,
  BUILDER_DETACHMENT_UNIT_UPGRADES,
} from "@/app/types";
import { detachmentData } from "@/app/data/detachment_data";
import BuilderUnitUpgradeSelect from "./BuilderUnitUpgradeSelect";

const BuilderDetachment = ({
  slot,
  slotSet,
  setFormationState,
}: {
  slot: BUILDER_DETACHMENT_SLOT;
  slotSet: SLOTSET;
  setFormationState: React.Dispatch<React.SetStateAction<BUILDER_FORMATION>>;
}) => {
  const [slotState, setSlotState] = useState(slot);

  const detachmentOptions: DETACHMENT[] = slot.restricted
    ? detachmentData.filter(
        (detachment) => detachment.detachment_type === slot.type
      )
    : detachmentData
        .filter((detachment) => detachment.detachment_type === slot.type)
        .concat(
          slot.options.map(
            (id) => detachmentData.find((entry) => entry.id === id)!
          )
        );

  const selectOptions = detachmentOptions.map((option, index) => (
    <option key={slot.slot_ref + "unitOption" + index} value={option.id}>
      {option.name}
    </option>
  ));

  const selectUnit = (id: number) => {
    if (!id) {
      setSlotState((prev) => {
        return { ...prev, selected_unit: null };
      });
      return;
    }
    const unitData = detachmentOptions.find((unit) => unit.id === id)!;
    if (unitData.upgrade_options) {
      const untDataUnitUpgrades: BUILDER_DETACHMENT_UNIT_UPGRADES[] =
        unitData.upgrade_options.map((option) => {
          return {
            name: option.name,
            number: 0,
            cost: 0,
            size: 0,
          };
        });
      const unitDataUnit: BUILDER_DETACHMENT_UNIT = {
        id: unitData.id,
        name: unitData.name,
        upgrade_options: untDataUnitUpgrades,
      };

      setSlotState((prev) => {
        return { ...prev, selected_unit: unitDataUnit };
      });
    }
    return;
  };

  const updateUnitUpgrades = (value: number, upgrade: string) => {
    console.log(`${value}${upgrade}`);
  };

  useEffect(() => {
    if (slotSet === SLOTSET.compulsory || slotSet === SLOTSET.optional) {
      setFormationState((prev) => {
        const toChange = prev[slotSet]?.map((slot) => {
          if (slot.slot_ref === slotState.slot_ref) {
            return slotState;
          }
          return slot;
        });
        return { ...prev, [slotSet]: toChange };
      });
    }
    if (slotSet === SLOTSET.choice) {
      console.log("optional");
    }
  }, [slotState]);

  return (
    <div className="border-2 border-black">
      <h4 className="w-full bg-green-950 text-green-50 text-graduate text-center py-1">
        {slot.type}
      </h4>
      {slot.description ? <p className="italic">*{slot.description}*</p> : null}
      <select
        value={slot.selected_unit ? slot.selected_unit.id : 0}
        onChange={(e) => selectUnit(Number(e.target.value))}
      >
        <option value={0}>Select unit</option>
        {selectOptions}
      </select>
      {/* UNIT UPGRADE SELECTIONS */}
      {slot.selected_unit ? (
        slot.selected_unit.upgrade_options ? (
          <div>
            {slot.selected_unit.upgrade_options.map((option, index) => (
              <BuilderUnitUpgradeSelect
                key={slot.slot_ref + "upgrades" + index}
                unitId={slot.selected_unit!.id}
                upgradeOption={option}
                setSlotState={setSlotState}
                keyId={slot.slot_ref}
              />
            ))}
          </div>
        ) : null
      ) : null}
    </div>
  );
};

export default BuilderDetachment;
