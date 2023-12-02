import React from "react";
import { formationData } from "@/app/data/formation_data";
import { notFound } from "next/navigation";
import FormationDataslate from "@components/FormationDataslate";

const page = ({ params: { name } }: { params: { name: string } }) => {
  const formationName = name.replaceAll("_", " ");
  const formationEntry = formationData.find(
    (formation) => formation.name === formationName
  );
  if (!formationEntry) {
    notFound();
  }
  return (
    <main className="py-8 max-w-screen-xl">
      <FormationDataslate {...formationEntry} />
    </main>
  );
};

export default page;
