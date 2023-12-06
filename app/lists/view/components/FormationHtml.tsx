import { BUILDER_FORMATION } from "@/app/types";
import FormationSlotHtml from "./FormationSlotHtml";
import { formationPoints } from "../../utils";
import { formationBreakPoints } from "../utils";
import React from "react";

const FormationHtml = ({
  formation,
  index,
}: {
  formation: BUILDER_FORMATION;
  index: number;
}) => {
  const breakPoints = formationBreakPoints(formation);

  return (
    <div className="text-base mb-2">
      <h3 className="text-lg border-b">
        <span className="font-bold">Formation {index + 1}</span>:{" "}
        {formation.name}
        {", "}
        {formationPoints(formation)}points
      </h3>
      <p>Formation Strength: {breakPoints.wounds}</p>
      <p className="border-b">Break Point: {breakPoints.break}</p>
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
