import React from "react";
import { getDetachmentIcons } from "@/app/utils/detachmentIcons";
import { DETACHMENT_TYPE } from "@/app/types";

const ListBuilderDetachmentTitle = ({
  slotType,
}: {
  slotType: DETACHMENT_TYPE;
}) => {
  return (
    <h4 className="sm:w-full flex gap-1 items-center justify-center builder_title_background rounded-md text-primary-50 text-graduate text-center py-1 sm:text-xl font-graduate px-2 mx-2 sm:mx-0">
      {getDetachmentIcons(slotType)} {slotType}
      {getDetachmentIcons(slotType)}
    </h4>
  );
};

export default ListBuilderDetachmentTitle;
