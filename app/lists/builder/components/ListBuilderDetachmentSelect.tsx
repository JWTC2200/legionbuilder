import React from "react";
import {
  DETACHMENT,
  BUILDER_DETACHMENT_UNIT,
  BUILDER_DETACHMENT_UNIT_UPGRADES,
  BUILDER_DETACHMENT_SLOT,
  SLOTSET,
  SUBFACTION_TYPE,
} from "@/app/types";
import { detachmentData } from "@/app/data/detachment_data";
import { listState } from "../state";

interface properties {
  formationSubfaction?: SUBFACTION_TYPE;
  detachmentSlot: BUILDER_DETACHMENT_SLOT;
  slotSet: SLOTSET;
}

const ListBuilderDetachmentSelect = ({
  detachmentSlot,
  formationSubfaction,
  slotSet,
}: properties) => {
  const { list, setList } = listState();

  const detachmentSelectedHighlight = detachmentSlot.selected_unit
    ? " text-tertiary-800 font-semibold"
    : "";

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

  const filterBySubfaction = (array: DETACHMENT[]) => {
    return array.filter((detachment) => {
      if (formationSubfaction) {
        return (
          detachment.subfaction === formationSubfaction ||
          detachment.subfaction === undefined ||
          detachment.id == detachmentSlot.selected_unit?.id
        );
      }
      return detachment;
    });
  };

  const detachmentOptions: DETACHMENT[] = detachmentSlot.restricted
    ? detachmentSlot.options.map(
        (option) =>
          detachmentData.filter((detachment) => detachment.id === option)[0]
      )
    : detachmentData
        .filter(
          (detachment) =>
            detachment.detachment_type === detachmentSlot.type &&
            detachment.faction === detachmentSlot.faction &&
            !detachment.unique
        )
        .concat(
          detachmentData.filter((detach) =>
            detachmentSlot.options?.includes(detach.id)
          )
        );

  const selectOptions = filterBySubfaction(detachmentOptions).map(
    (option, index) => (
      <option
        key={detachmentSlot.slot_ref + "unitOption" + index}
        value={option.id}
        className="text-black"
      >
        {option.base_cost}pts: {option.name}
      </option>
    )
  );

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
        ...unitData,
        upgrade_options: untDataUnitUpgrades,
      };
      return unitDataUnit;
    }
    return null;
  };

  const changeDetachment = (id: number) => {
    const newUnit = createNewUnit(id);
    if (slotSet === SLOTSET.compulsory || slotSet === SLOTSET.optional) {
      const newArmyList = {
        ...list,
        formations: list.formations.map((form) => {
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
      setList(newArmyList);
    }
    if (slotSet === SLOTSET.choice) {
      const newArmyList = {
        ...list,
        formations: list.formations.map((form) => {
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
      setList(newArmyList);
    }
  };
  return (
    <select
      value={detachmentSlot.selected_unit ? detachmentSlot.selected_unit.id : 0}
      onChange={(e) => changeDetachment(Number(e.target.value))}
      className={
        "w-full text-center my-1 py-1 px-2 border border-primary-950 font-graduate hover:text-tertiary-700 active:text-tertiary-700" +
        detachmentSelectedHighlight
      }
    >
      <option value={"0"} className="text-black">
        Select Detachment
      </option>
      {selectOptions}
    </select>
  );
};

export default ListBuilderDetachmentSelect;
