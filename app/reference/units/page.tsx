"use client";

import React from "react";
import Link from "next/link";
import { unitData } from "../../data/unit_data";
import { factionTypeArray } from "../../types";
import Main from "@components/Main";
import {BreadCrumbs, Crumb} from "@components/BreadCrumbs";
import Sticky from "@components/Sticky";
import {Row} from "@components/HTML";

const page = () => {
  return (
    <Main>
      <Sticky className="z-10">
        <BreadCrumbs>
          <Crumb href="/reference">Reference</Crumb>
          <Crumb href="/reference/units">Units</Crumb>
        </BreadCrumbs>
      </Sticky>
      
      <div className="w-full lg:flex lg:gap-4">
        {factionTypeArray.map((faction) => {
          return (
              <div key={faction} className="w-full lg:w-auto lg:flex-auto">
                <h3 className="font-graduate text-xl text-center bg-backgrounds-950 py-2 px-4">{faction}</h3>
                {unitData
                  .filter(unitDataslate => unitDataslate.faction === faction && !unitDataslate.unique)
                  .map((unit) => (
                    <Row key={unit.name} className="px-4 hover:bg-tertiary-700 hover:text-secondary-50">
                      <Link href={`/reference/units/${unit.name.replaceAll(" ", "_")} `} className="block w-full py-1">
                        {unit.name}
                      </Link>
                    </Row>
                  ))}
              </div>
          );
        })}
      </div>
    </Main>
  );
};

export default page;
