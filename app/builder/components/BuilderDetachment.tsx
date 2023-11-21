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
import { detachmentPoints, detachmentSize } from "../utils";

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
      {option.name}: {option.base_cost}pts
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
        base_cost: unitData.base_cost,
        base_size: unitData.base_size,
        max_size: unitData.max_size,
        upgrade_options: untDataUnitUpgrades,
      };

      setSlotState((prev) => {
        return { ...prev, selected_unit: unitDataUnit };
      });
    }
    return;
  };

  useEffect(() => {
    if (slotSet === SLOTSET.compulsory || slotSet === SLOTSET.optional) {
      setFormationState((prev) => {
        const toChange = prev[slotSet]?.map((prevSlot) => {
          if (prevSlot.slot_ref === slotState.slot_ref) {
            return slotState;
          }
          return prevSlot;
        });
        return { ...prev, [slotSet]: toChange };
      });
    }
    if (slotSet === SLOTSET.choice) {
      setFormationState((prev) => {
        if (prev.choice && prev.choice.length) {
          const newChoiceAray = prev.choice.map((array) =>
            array.map((choice) => {
              if (choice.slot_ref === slot.slot_ref) {
                return slotState;
              }
              return choice;
            })
          );
          return { ...prev, choice: newChoiceAray };
        }

        return prev;
      });
    }
  }, [slotState]);

  return (
    <div className="sm:border-2 flex-grow border-black flex flex-col max-w-md">
      <h4 className="w-full justify-center bg-green-950 text-green-50 text-graduate text-center py-1 sm:text-xl font-graduate">
        {slot.type}
      </h4>

      {/* DESCRIPTION  */}
      {slot.description ? (
        <p className="italic text-center">*{slot.description}*</p>
      ) : null}

      {/* UNIT POINTS AND DETACHMENT SIZE */}
      {slot.selected_unit ? (
        <div className="w-full flex flex-wrap gap-2 sm:gap-4 justify-center items-center px-1">
          <p className="text-sm sm:text-base font-graduate font-bold">
            Detachment size:{detachmentSize(slot.selected_unit)}
          </p>
          <p className="sm:text-sm font-graduate font-bold border-b underline">
            {detachmentPoints(slot.selected_unit)}
            <span className="text-base font-normal ">points</span>
          </p>
        </div>
      ) : null}

      {/* UNIT OVER DETACHMENT SIZE WARNING */}
      {slot.selected_unit ? (
        detachmentSize(slot.selected_unit) > slot.selected_unit.max_size ? (
          <p className="text-center text-red-500 sm:text-xl">
            Detachment is to large!
          </p>
        ) : null
      ) : null}

      {/* SELECT SECTION */}
      <div className="px-1 pb-2">
        <select
          value={slot.selected_unit ? slot.selected_unit.id : 0}
          onChange={(e) => selectUnit(Number(e.target.value))}
          className="w-full text-center my-2 py-1 border border-green-950 font-graduate "
        >
          <option value={0}>Select Detachment</option>
          {selectOptions}
        </select>

        {/* UNIT UPGRADE SELECTIONS */}
        {slot.selected_unit ? (
          slot.selected_unit.upgrade_options ? (
            <div className="flex flex-col gap-1">
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
    </div>
  );
};

export default BuilderDetachment;
