import React from "react";
import {
  BUILDER_LIST,
  BUILDER_DETACHMENT_SLOT,
  SLOTSET,
  DETACHMENT,
  BUILDER_DETACHMENT_UNIT,
  BUILDER_DETACHMENT_UNIT_UPGRADES,
  FACTION,
} from "@/app/types";
import { detachmentData } from "@/app/data/detachment_data";
import BuilderUnitUpgradeSelect from "./BuilderUnitUpgradeSelect";
import { detachmentPoints, detachmentSize } from "../utils";
import { getDetachmentIcons } from "@/app/utils/detachmentIcons";

const BuilderDetachment = ({
  detachmentSlot,
  faction,
  slotSet,
  setArmyList,
}: {
  detachmentSlot: BUILDER_DETACHMENT_SLOT;
  faction: FACTION | null;
  slotSet: SLOTSET;
  setArmyList: React.Dispatch<React.SetStateAction<BUILDER_LIST>>;
}) => {
  // filtering for custom detachment slots
  const detachmentOptions: DETACHMENT[] = detachmentSlot.restricted
    ? detachmentSlot.options.map(
        (option) =>
          detachmentData.filter((detachment) => detachment.id === option)[0]
      )
    : detachmentData
        .filter(
          (detachment) =>
            detachment.detachment_type === detachmentSlot.type &&
            detachment.faction === faction &&
            !detachment.unique
        )
        .concat(
          detachmentData.filter((detach) =>
            detachmentSlot.options?.includes(detach.id)
          )
        );

  const selectOptions = detachmentOptions.map((option, index) => (
    <option
      key={detachmentSlot.slot_ref + "unitOption" + index}
      value={option.id}
    >
      {option.base_cost}pts: {option.name}
    </option>
  ));

  const createNewUnit = (newId: number): BUILDER_DETACHMENT_UNIT | null => {
    if (newId) {
      const unitData = detachmentOptions.find((unit) => unit.id === newId)!;
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
      return unitDataUnit;
    }
    return null;
  };

  const updateSlotArray = (
    detachmentArray: BUILDER_DETACHMENT_SLOT[],
    newUnit: BUILDER_DETACHMENT_UNIT | null
  ): BUILDER_DETACHMENT_SLOT[] => {
    const newArray = detachmentArray.map((detach) => {
      if (detach.slot_ref === detachmentSlot.slot_ref) {
        return { ...detach, selected_unit: newUnit };
      }
      return detach;
    });
    return newArray;
  };

  const changeDetachment = (id: number) => {
    const newUnit = createNewUnit(id);
    console.log(newUnit);
    setArmyList((prev) => {
      if (slotSet === SLOTSET.compulsory || slotSet === SLOTSET.optional) {
        const newArmyList = {
          ...prev,
          formations: prev.formations.map((form) => {
            if (form.ref_id === detachmentSlot.ref_id) {
              return {
                ...form,
                [slotSet]: form[slotSet]
                  ? updateSlotArray(form[slotSet]!, newUnit)
                  : null,
              };
            }
            return form;
          }),
        };
        return newArmyList;
      }
      if (slotSet === SLOTSET.choice) {
        const newArmyList = {
          ...prev,
          formations: prev.formations.map((form) => {
            if (form.ref_id === detachmentSlot.ref_id) {
              if (!form.choice) {
                return { ...form };
              }
              return {
                ...form,
                choice: form.choice.map((array) =>
                  updateSlotArray(array, newUnit)
                ),
              };
            }
            return form;
          }),
        };
        return newArmyList;
      }

      return prev;
    });
  };

  return (
    <div className="flex-grow flex flex-col max-w-md">
      <h4 className="sm:w-full flex gap-1 items-center justify-center bg-green-950 text-green-50 text-graduate text-center py-1 sm:text-xl font-graduate px-2 mx-2 sm:mx-0">
        {getDetachmentIcons(detachmentSlot.type)} {detachmentSlot.type}
        {getDetachmentIcons(detachmentSlot.type)}
      </h4>
      {/* DESCRIPTION  */}
      {detachmentSlot.description ? (
        <p className="italic text-center pt-1">
          *{detachmentSlot.description}*
        </p>
      ) : null}

      {/* UNIT POINTS AND DETACHMENT SIZE */}
      {detachmentSlot.selected_unit ? (
        <div className="w-full flex flex-wrap gap-2 sm:gap-4 justify-center items-center px-1">
          <p className="text-sm sm:text-base font-graduate font-bold">
            Detachment size:{detachmentSize(detachmentSlot.selected_unit)}
          </p>
          <p className="sm:text-sm font-graduate font-bold border-b underline">
            {detachmentPoints(detachmentSlot.selected_unit)}
            <span className="text-base font-normal ">points</span>
          </p>
        </div>
      ) : null}

      {/* UNIT OVER DETACHMENT SIZE WARNING */}
      {detachmentSlot.selected_unit ? (
        detachmentSize(detachmentSlot.selected_unit) >
        detachmentSlot.selected_unit.max_size ? (
          <p className="text-center text-red-500 sm:text-xl">
            Detachment is to large!
          </p>
        ) : null
      ) : null}

      {/* SELECT SECTION */}
      <div className="px-2">
        <select
          value={
            detachmentSlot.selected_unit ? detachmentSlot.selected_unit.id : 0
          }
          onChange={(e) => changeDetachment(Number(e.target.value))}
          className="w-full text-center my-1 py-1 border border-green-950 font-graduate "
        >
          <option value={0}>Select Detachment</option>
          {selectOptions}
        </select>

        {/* UNIT UPGRADE SELECTIONS */}
        {detachmentSlot.selected_unit ? (
          detachmentSlot.selected_unit.upgrade_options ? (
            <div className="flex flex-col gap-1">
              {detachmentSlot.selected_unit.upgrade_options.map(
                (option, index) => (
                  <BuilderUnitUpgradeSelect
                    key={detachmentSlot.slot_ref + "upgrades" + index}
                    unitId={detachmentSlot.selected_unit!.id}
                    upgradeOption={option}
                    setArmyList={setArmyList}
                    slotSet={slotSet}
                    refId={detachmentSlot.ref_id}
                    slotRef={detachmentSlot.slot_ref}
                  />
                )
              )}
            </div>
          ) : null
        ) : null}
      </div>
    </div>
  );
};

export default BuilderDetachment;
