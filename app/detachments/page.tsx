import React from "react";
import Link from "next/link";
import { factionTypeArray } from "../types";
import { detachmentData } from "../data/detachment_data";
import { getDetachmentIcons } from "../utils/detachmentIcons";

const page = () => {
  return (
    <main className="flex flex-wrap gap-12 p-4">
      {factionTypeArray.map((faction) => {
        return (
          <div key={faction} className="flex flex-col max-w-screen-xl">
            <h3 className="font-subrayada text-2xl text-center">{faction}</h3>
            {detachmentData
              .filter(
                (detachmentFaction) =>
                  detachmentFaction.faction === faction &&
                  !detachmentFaction.unique
              )
              .map((detachment) => (
                <Link
                  key={detachment.name}
                  href={`/detachments/${detachment.name.replaceAll(" ", "_")} `}
                  className="text-lg hover:text-cyan-700 active:text-cyan-600 flex items-center gap-1"
                >
                  {getDetachmentIcons(detachment.detachment_type)}
                  {detachment.name}
                </Link>
              ))}
          </div>
        );
      })}
    </main>
  );
};

export default page;
