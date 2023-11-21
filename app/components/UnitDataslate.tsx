import React from "react";
import Link from "next/link";
import { UNIT_DATASHEET } from "../types";
import { getUnitWeaponRows } from "../utils/unitweaponrows";
import RuleBox from "./Rulebox";
import { FaExternalLinkAlt } from "react-icons/fa";

const UnitDataslate = (unit: UNIT_DATASHEET) => {
  const unitWeaponRows = getUnitWeaponRows(unit.weapons);

  return (
    <article className="max-w-screen-xl p-2 border-2 border-black dataslate_background rounded-lg">
      {/* TITLE */}
      <div className="flex justify-between items-center gap-4 border-2 border-black bg-green-950 text-green-50 py-1 px-3 mb-2">
        <h2 className="text-2xl font-graduate font-bold">{unit.name}</h2>
        <h3 className="text-xl font-graduate">
          {unit.unit_type.type} {`(${unit.unit_type.value})`}
        </h3>
      </div>
      {/* UNIT BASIC STATS */}
      <table className="w-full border-2 border-black">
        <thead className="bg-green-950 text-green-50">
          <tr>
            <th className="text-start px-2">Name</th>
            <th className="text-center">Move</th>
            <th className="text-center">Save</th>
            <th className="text-center">CAF</th>
            <th className="text-center">Morale</th>
            <th className="text-center pr-4">W</th>
          </tr>
        </thead>
        <tbody className="text-stone-900">
          <tr>
            <td className="text-start px-2">
              {" "}
              <Link
                href={`/units/${unit.name.replaceAll(" ", "_")}`}
                className="flex items-center gap-2 hover:text-cyan-700 active:text-cyan-600"
              >
                {unit.name} <FaExternalLinkAlt />
              </Link>
            </td>
            <td className="text-center">{unit.movement}"</td>
            <td className="text-center">{unit.save}+</td>
            <td className="text-center">+{unit.caf}</td>
            <td className="text-center">
              {unit.morale ? unit.morale + "+" : "-"}
            </td>
            <td className="text-center pr-4">{unit.wounds}</td>
          </tr>
        </tbody>
      </table>
      {/* WEAPON STATS SECTION */}
      <table className="w-full mt-4 border-2 border-black">
        <thead className="bg-green-950 text-green-50">
          <tr>
            <th className="text-start px-2">Weapon</th>
            <th className="text-center">Range</th>
            <th className="text-center">Dice</th>
            <th className="text-center">To Hit</th>
            <th className="text-center">AP</th>
            <th className="text-start px-2">Traits</th>
          </tr>
        </thead>
        <tbody className="text-stone-900">{unitWeaponRows}</tbody>
      </table>
      {/* SPECIAL RULES SECTION */}
      {unit.special_rules.length ? (
        <div className="mt-2 border-2 border-black">
          <h3 className="bg-green-950 text-green-50 px-2 py-1 font-bold">
            Special Rules
          </h3>
          <div className="px-2 flex gap-1 text-stone-900">
            {" "}
            {unit.special_rules.sort().map((rule, index) => (
              <div key={rule + index} className="flex">
                <RuleBox rule={rule} />
                {index < unit.special_rules.length - 1 ? "," : ""}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
};

export default UnitDataslate;
