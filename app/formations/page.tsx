import React from "react";
import Link from "next/link";
import { formationData } from "../data/formation_data";
import { factionTypeArray } from "../types";

const page = () => {
  return (
    <main className="flex flex-wrap gap-12 p-4 max-w-screen-xl justify-center text-center">
      {factionTypeArray.map((faction) => (
        <div key={faction} className="flex flex-col">
          {" "}
          <h3 className="font-subrayada text-2xl text-center">{faction}</h3>
          {formationData
            .filter((formationFaction) => formationFaction.faction === faction)
            .map((formation) => (
              <Link
                key={formation.name}
                href={`/formations/${formation.name.replaceAll(" ", "_")} `}
                className="text-lg hover:text-tertiary-700 active:text-tertiary-600"
              >
                {formation.name}
              </Link>
            ))}
        </div>
      ))}
    </main>
  );
};

export default page;
