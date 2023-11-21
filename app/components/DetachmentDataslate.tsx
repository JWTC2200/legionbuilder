import React from "react";
import Link from "next/link";
import { DETACHMENT } from "../types";
import { unitData } from "../data/unit_data";
import { notFound } from "next/navigation";
import { weaponData } from "../data/weapon_data";
import { getUnitWeaponRows } from "../utils/unitweaponrows";
import RuleBox from "./Rulebox";
import UnitDataslate from "./UnitDataslate";
import { FaExternalLinkAlt } from "react-icons/fa";

const DetachmentDataslate = (detachment: DETACHMENT) => {
  const mainUnit = unitData.filter((unit) =>
    detachment.main_unit.includes(unit.id)
  );
  if (!mainUnit.length) {
    notFound();
  }

  const mainUnitBasicStats = mainUnit.map((unit) => {
    return (
      <tr key={unit.name}>
        <td className="text-start px-2">
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
        <td className="text-center">{unit.morale ? unit.morale + "+" : "-"}</td>
        <td className="text-center pr-4">{unit.wounds}</td>
      </tr>
    );
  });

  const mainUnitWeaponsArray = Array.from(
    new Set(mainUnit.map((unit) => unit.weapons).flat())
  );

  const weaponRows = getUnitWeaponRows(mainUnitWeaponsArray);

  return (
    <article className="max-w-screen-xl p-2 border-2 border-black dataslate_background rounded-lg">
      {/* TITLE */}
      <div className="flex justify-between border-2 border-black bg-green-950 text-green-50 py-1 px-3 mb-2">
        <h2 className="text-2xl font-graduate font-bold">{detachment.name}</h2>
        <h3 className="text-xl font-graduate">{detachment.base_cost} Points</h3>
      </div>

      <div className="flex justify-between border-2 border-black bg-green-950 text-green-50 px-2 py-1 font-bold font-graduate">
        <p>
          {mainUnit[0].unit_type.type}
          {`(${mainUnit[0].unit_type.value})`}
        </p>
        <p>Detachment size: {detachment.base_size}</p>
      </div>

      {/* UNIT BASIC STATS */}
      <table className="w-full border-2 border-black mt-2">
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
        <tbody className="text-stone-900">{mainUnitBasicStats}</tbody>
      </table>
      {/* DETACHMENT WEAPONS INFO */}
      {detachment.loadout.length ? (
        <div className="mt-2 border-2 border-black">
          <h3 className="bg-green-950 text-green-50 px-2 py-1 font-bold">
            Weapons
          </h3>
          {detachment.loadout.map((loadout, index) => (
            <div
              key={"loadout" + index}
              className="text-green-950 p-2 flex flex-col gap-1"
            >
              {loadout.text ? <p>{loadout.text}</p> : null}
              {loadout.text_option ? (
                <ul className="list-disc grid sm:grid-cols-2">
                  {loadout.text_option.map((option) => (
                    <li key={option} className="ml-4">
                      {option}
                    </li>
                  ))}
                </ul>
              ) : null}
              {loadout.weapon_option ? (
                <ul className="list-disc grid grid-cols-2">
                  {loadout.weapon_option.map((weaponNumber) => {
                    const foundWeapon = weaponData.find(
                      (weapon) => weapon.id === weaponNumber
                    );
                    if (foundWeapon) {
                      return (
                        <li key={weaponNumber} className="ml-4">
                          {foundWeapon.name}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              ) : null}
              {loadout.itallic_text ? (
                <p className="italic opacity-60">{loadout.itallic_text}</p>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
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
        <tbody className="text-stone-900">{weaponRows}</tbody>
      </table>
      {/* DATASHEET INFO */}
      {detachment.datasheet_info.length ? (
        <div className="mt-2 border-2 border-black">
          <h3 className="bg-green-950 text-green-50 px-2 py-1 font-bold">
            Upgrades
          </h3>
          {detachment.datasheet_info.map((info, index) => (
            <div
              key={"upgrades" + index}
              className="text-green-950 p-2 flex flex-col gap-1"
            >
              {info.text ? <p>{info.text}</p> : null}
              {info.options ? (
                <ul className="list-disc">
                  {info.options.map((option) => (
                    <li key={option.text} className="ml-4">
                      <strong>{option.text}</strong>, +
                      <strong>{option.cost}</strong> points,
                    </li>
                  ))}
                </ul>
              ) : null}
              {info.info ? <p className="italic">{info.info}</p> : null}
            </div>
          ))}
        </div>
      ) : null}
      {mainUnit[0].special_rules.length ? (
        <div className="mt-2 border-2 border-black">
          <h3 className="bg-green-950 text-green-50 px-2 py-1 font-bold">
            Special Rules
          </h3>
          <div className="px-2 flex gap-1 text-stone-900">
            {" "}
            {mainUnit[0].special_rules.sort().map((rule, index) => (
              <div key={rule + index} className="flex">
                <RuleBox rule={rule} />
                {index < mainUnit[0].special_rules.length - 1 ? "," : ""}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {detachment.related_unit.length ? (
        <div className="mt-2 border-2 border-black bg-green-950">
          <h3 className="bg-green-950 text-green-50 px-2 py-1 font-bold">
            Additional units
          </h3>
          <div className="flex flex-col gap-4 p-4">
            {detachment.related_unit.map((unitNo) => {
              const foundUnit = unitData.find((unit) => unit.id === unitNo);
              if (foundUnit) {
                return (
                  <UnitDataslate key={foundUnit.name + unitNo} {...foundUnit} />
                );
              }
              return null;
            })}
          </div>
        </div>
      ) : null}
    </article>
  );
};

export default DetachmentDataslate;
