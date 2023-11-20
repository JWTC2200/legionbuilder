import { formationData } from "../data/formation_data";
import { formationSlotData } from "../data/formation_slot_data";
import { FORMATION_SLOT } from "../types";

export const setBuilderDetachment = (
  formationID: number,
  formationRef: string
) => {
  const findFormation = formationData.find(
    (formation) => formation.id === formationID
  );
  if (findFormation) {
    return {
      name: findFormation.name,
      id: formationID,
      compulsory: setBuilderDetachmentSlots(
        findFormation.compulsory,
        formationRef
      ),
      optional: setBuilderDetachmentSlots(findFormation.optional, formationRef),
    };
  }
  return false;
};

export const setBuilderDetachmentSlots = (
  slotArray: number[] | null,
  formationRef: string
) => {
  if (slotArray) {
    const slots: FORMATION_SLOT[] = slotArray
      .map((id) => formationSlotData.find((slot) => slot.id === id))
      .filter((exists) => {
        return exists !== undefined;
      }) as FORMATION_SLOT[];
    const returnedSlots = slots.map((slot, index) => {
      return {
        ...slot,
        slot_ref: formationRef + "compulsorySlot" + index,
        selected_unit: null,
      };
    });
    return returnedSlots;
  }
  return null;
};
