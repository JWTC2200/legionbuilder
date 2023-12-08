import React from "react";
import { BUILDER_DETACHMENT_UNIT, SUBFACTION_TYPE } from "@/app/types";

interface properties {
  selectedUnit: BUILDER_DETACHMENT_UNIT;
  formationSubfaction?: SUBFACTION_TYPE;
}

const ListBuilderDetachmentSubfactionWarning = ({
  selectedUnit,
  formationSubfaction,
}: properties) => {
  return (
    <>
      {selectedUnit.subfaction && formationSubfaction ? (
        selectedUnit.subfaction !== formationSubfaction ? (
          <p className="text-center text-red-600 pt-2 font-semibold">
            This detachment is a {selectedUnit.subfaction} detachment.Your
            formation is {formationSubfaction}.
          </p>
        ) : null
      ) : null}
    </>
  );
};

export default ListBuilderDetachmentSubfactionWarning;
