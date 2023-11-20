import React from "react";
import UnitDataslate from "@/app/components/UnitDataslate";
import { unitData } from "@/app/data/unit_data";
import { notFound } from "next/navigation";

const page = ({ params: { name } }: { params: { name: string } }) => {
  const unitName = name.replaceAll("_", " ");
  const unitDataEntry = unitData.find((unit) => unit.name === unitName);
  if (!unitDataEntry) {
    notFound();
  }
  return (
    <main className="py-8 max-w-screen-xl">
      <UnitDataslate {...unitDataEntry} />
    </main>
  );
};

export default page;
