import { BUILDER_FORMATION } from "@/app/types";
import FormationSlotHtml from "./FormationSlotHtml";
import { formationPoints } from "../../utils";

import React from "react";
import FormationBreakHtml from "./FormationBreakHtml";

const FormationHtml = ({
  formation,
  index,
}: {
  formation: BUILDER_FORMATION;
  index: number;
}) => {
  return (
    <div className="text-base mb-2">
      <h3 className="sm:text-lg">
        <span className="font-bold">Formation {index + 1}</span>:{" "}
        {formation.subfaction ? (
          <span className="font-graduate">{formation.subfaction} </span>
        ) : null}
        {formation.name}
        {", "}
        {formationPoints(formation)}points
      </h3>

      <FormationBreakHtml formation={formation} />
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
