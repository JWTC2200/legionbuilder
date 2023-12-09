"use client";

import React from "react";
import UnitDataslate from "@components/UnitDataslate";
import { unitData } from "@/app/data/unit_data";
import { notFound } from "next/navigation";
import Main from "@components/Main";
import {BreadCrumbs, Crumb, ReferenceSelector} from "@components/BreadCrumbs";
import Sticky from "@components/Sticky";

const page = ({ params: { name } }: { params: { name: string } }) => {
  const unitName = name.replaceAll("_", " ");
  const unitDataEntry = unitData.find((unit) => unit.name === unitName);
  if (!unitDataEntry) {
    notFound();
  }
  return (
    <Main>
      <Sticky className="z-10">
        <BreadCrumbs>
          <Crumb href="/reference">Reference</Crumb>
          <ReferenceSelector/>
        </BreadCrumbs>
      </Sticky>
      <UnitDataslate {...unitDataEntry} />
    </Main>
  );
};

export default page;
