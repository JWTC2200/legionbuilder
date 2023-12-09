"use client";

import React from "react";
import Link from "next/link";
import { unitData } from "../../data/unit_data";
import { factionTypeArray } from "../../types";
import Main from "@components/Main";
import {BreadCrumbs, Crumb, ReferenceSelector} from "@components/BreadCrumbs";
import Sticky from "@components/Sticky";
import {Row} from "@components/HTML";
import FactionList from "@/app/reference/FactionList";

const page = () => {
  return (
    <Main>
      <Sticky className="z-10">
        <BreadCrumbs>
          <Crumb href="/reference">Reference</Crumb>
          <ReferenceSelector/>
        </BreadCrumbs>
      </Sticky>
      
      <div className="w-full lg:flex lg:gap-4">
        {factionTypeArray.map(faction =>
            <FactionList faction={faction} key={faction}>
              {unitData
                .filter(unitDataslate => unitDataslate.faction === faction && !unitDataslate.unique)
                .map((unit) => (
                  <Row key={unit.name} className="px-4 hover:bg-secondary-700 hover:text-secondary-50">
                    <Link href={`/reference/units/${unit.name.replaceAll(" ", "_")} `} className="block w-full py-1">
                      {unit.name}
                    </Link>
                  </Row>
                ))}
            </FactionList>
          )}
      </div>
    </Main>
  );
};

export default page;
