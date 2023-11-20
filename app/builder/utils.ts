import { formationSlotData } from "../data/formation_slot_data";
import { BUILDER_FORMATION, FORMATION } from "../types";

export const createBuilderFormation = (
  formationData: FORMATION,
  number: number
): BUILDER_FORMATION => {
  const createBuilderDetachmentSlots = (
    slotArray: number[] | null,
    reference: string
  ) => {
    if (slotArray) {
      const detachmentSlotArray = slotArray.filter((slot, index) => {
        const slotData = formationSlotData.find(
          (slotData) => slotData.id === slot
        );
        if (slotData) {
          return slotData.id;
        }
      });
      return detachmentSlotArray;
    }
    return [];
  };

  const formationChoiceSlots = formationData.choice
    ? formationData.choice.map((choice, index) =>
        createBuilderDetachmentSlots(choice, `${index}choice`)
      )
    : [];

  const newFormation: BUILDER_FORMATION = {
    name: formationData.name,
    id: `formation${number}`,
    choice: formationChoiceSlots,
    compulsory: createBuilderDetachmentSlots(
      formationData.compulsory,
      "compulsory"
    ),
    optional: createBuilderDetachmentSlots(formationData.optional, "optional"),
  };

  return newFormation;
};
