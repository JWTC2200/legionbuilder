import React from "react";
import { detachmentData } from "@/app/data/detachment_data";
import { notFound } from "next/navigation";
import DetachmentDataslate from "@/app/components/DetachmentDataslate";

const page = ({ params: { name } }: { params: { name: string } }) => {
  const detachmentName = name.replaceAll("_", " ");
  const detachmentDataEntry = detachmentData.find(
    (detachment) => detachment.name === detachmentName
  );

  if (!detachmentDataEntry) {
    notFound();
  }
  return (
    <main className="py-8 max-w-screen-xl">
      <DetachmentDataslate {...detachmentDataEntry} />
    </main>
  );
};

export default page;
