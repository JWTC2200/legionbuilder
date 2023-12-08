"use client";

import React from "react";
import { formationData } from "@/app/data/formation_data";
import { notFound } from "next/navigation";
import FormationDataslate from "@components/FormationDataslate";
import {BreadCrumbs, Crumb, ReferenceSelector} from "@components/BreadCrumbs";
import Main from "@components/Main";

const page = ({ params: { name } }: { params: { name: string } }) => {
  const formationName = name.replaceAll("_", " ");
  const formationEntry = formationData.find(
    (formation) => formation.name === formationName
  );
  if (!formationEntry) {
    notFound();
  }
  return (
    <Main>
      <BreadCrumbs>
        <Crumb href="/reference">Reference</Crumb>
        <ReferenceSelector/>
      </BreadCrumbs>
      
      <FormationDataslate {...formationEntry} />
    </Main>
  );
};

export default page;
