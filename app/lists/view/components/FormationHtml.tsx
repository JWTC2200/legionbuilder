import { BUILDER_FORMATION } from "@/app/types";
import FormationSlotHtml from "./FormationSlotHtml";
import { formationPoints } from "../../utils";
import React from "react";

const FormationHtml = ({
  formation,
  index,
}: {
  formation: BUILDER_FORMATION;
  index: number;
}) => {
  return (
    <div className="text-sm mb-2">
      <h3 className="text-base">
        <strong>Formation {index + 1}</strong>: {formation.name}
        {", "}
        {formationPoints(formation)}points
      </h3>
      <FormationSlotHtml slotArray={formation.compulsory} type={"Compulsory"} />
      <FormationSlotHtml slotArray={formation.optional} type={"Optional"} />
      <FormationSlotHtml
        slotArray={formation.choice ? formation.choice.flat() : null}
        type={"Choice"}
      />
    </div>
  );
};

export default FormationHtml;
