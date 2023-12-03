import React from "react";

const ListBuilderDetachmentDescription = ({ text }: { text: string }) => {
  return <p className="italic text-center pt-1">*{text}*</p>;
};

export default ListBuilderDetachmentDescription;
