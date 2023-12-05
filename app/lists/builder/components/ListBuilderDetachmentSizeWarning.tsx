import React from "react";
import { detachmentSize } from "../../utils";
import { BUILDER_DETACHMENT_UNIT } from "@/app/types";

const ListBuilderDetachmentSizeWarning = ({
  unit,
}: {
  unit: BUILDER_DETACHMENT_UNIT;
}) => {
  return (
    <>
      {detachmentSize(unit) > unit.max_size ? (
        <p className="text-center text-red-500 sm:text-xl">
          Detachment too large!
        </p>
      ) : null}
    </>
  );
};

export default ListBuilderDetachmentSizeWarning;
