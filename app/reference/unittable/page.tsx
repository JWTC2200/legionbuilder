import { unitData } from "@/app/data/unit_data";
import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const page = () => {
  const sortedUnitData = unitData.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return (
    <main className="max-w-lg">
      <table className="w-full border-t-2 border-b-2 sm:border-2 border-black">
        <thead className="bg-primary-950 text-primary-50">
          <tr>
            <th className="text-start px-2">Name</th>
            <th className="text-center">Move</th>
            <th className="text-center">Save</th>
            <th className="text-center">CAF</th>
            <th className="text-center">Morale</th>
            <th className="text-center pr-4">W</th>
          </tr>
        </thead>
        <tbody className="text-secondary-900">
          {sortedUnitData.map((unit) => (
            <tr key={unit.id} className="even:bg-secondary-300 odd:bg-secondary-100">
              <td className="text-start px-2">
                {" "}
                <Link
                  href={`/reference/units/${unit.name.replaceAll(" ", "_")}`}
                  className="flex flex-wrap items-center gap-2 hover:text-cyan-700 active:text-cyan-600"
                >
                  <FaExternalLinkAlt /> {unit.name}
                </Link>
              </td>
              <td className="text-center">{unit.movement}"</td>
              <td className="text-center">{unit.save}+</td>
              <td className="text-center">
                {Number(unit.caf) > 0 ? "+" : null}
                {unit.caf}
              </td>
              <td className="text-center">
                {unit.morale ? unit.morale + "+" : "-"}
              </td>
              <td className="text-center pr-4">{unit.wounds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default page;
