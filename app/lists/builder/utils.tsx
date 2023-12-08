import {
  BUILDER_FORMATION,
  FORMATION_SLOT,
  BUILDER_DETACHMENT_SLOT,
  BUILDER_LIST,
} from "@/app/types";
import { formationData } from "@/app/data/formation_data";
import { formationSlotData } from "@/app/data/formation_slot_data";
import { toast } from "react-toastify";

export const setBuilderDetachment = (
  formationID: number,
  formationRef: string
): BUILDER_FORMATION | null => {
  const findFormation = formationData.find(
    (formation) => formation.id === formationID
  );
  if (findFormation) {
    return {
      ...findFormation,
      ref_id: formationRef,
      id: formationID,
      compulsory: getSlots(
        findFormation.compulsory,
        formationRef,
        "compulsorySlot"
      ),
      optional: getSlots(findFormation.optional, formationRef, "optionalSlot"),
      choice: getChoiceSlots(findFormation.choice, formationRef),
    };
  }
  return null;
};

const getSlots = (
  slotArray: number[] | null,
  formationRef: string,
  typeRef: string
) => {
  if (slotArray) {
    const slots: FORMATION_SLOT[] = slotArray
      .sort()
      .map((id) => formationSlotData.find((slot) => slot.id === id))
      .filter((exists) => {
        return exists !== undefined;
      }) as FORMATION_SLOT[];
    const returnedSlots = slots.map((slot, index) => {
      return {
        ...slot,
        ref_id: formationRef,
        slot_ref: formationRef + typeRef + index,
        selected_unit: null,
      };
    });
    return returnedSlots;
  }
  return slotArray;
};

const getChoiceSlots = (
  slotArray: number[][] | null,
  formationRef: string
): BUILDER_DETACHMENT_SLOT[][] | null => {
  if (slotArray && slotArray.length) {
    // Need to get rid of this Typescript any
    const choiceArray: any = slotArray.map((secondaryArray, index) => {
      if (secondaryArray && secondaryArray.length) {
        return getSlots(secondaryArray, formationRef, `choiceSlots${index}`);
      }
    });
    return choiceArray;
  }
  return null;
};

export const handleSaveList = (list: BUILDER_LIST) => {
  localStorage.setItem("legionbuilder", JSON.stringify(list));
  toast.success("List saved locally");
};
