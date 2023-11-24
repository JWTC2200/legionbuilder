"use client";

import React, { useState } from "react";

import { weaponData } from "@/app/data/weapon_data";

import WeaponTraitBox from "@/app/components/WeaponTraitBox";

const page = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const sortedWeapons = weaponData.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const filteredWeapons = sortedWeapons.filter((weapon) =>
    weapon.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const weaponRows = filteredWeapons.map((weapon) => (
    <tr className="even:bg-stone-300 odd:bg-stone-100" key={weapon.id}>
      <td className="px-2">
        {weapon.profiles.length > 1 ? (
          <p>{weapon.name}</p>
        ) : (
          <p>{weapon.name}</p>
        )}
      </td>
      <td className="text-center">
        {weapon.profiles.map((profile, index) => (
          <p key={weapon.name + "range" + index}>
            {profile.range ? profile.range : "-"}
          </p>
        ))}
      </td>
      <td className="text-center">
        {weapon.profiles.map((profile, index) => (
          <p key={weapon.name + "dice" + index}>
            {profile.dice ? profile.dice : "-"}
          </p>
        ))}
      </td>
      <td className="text-center">
        {weapon.profiles.map((profile, index) => (
          <p key={weapon.name + "tohit" + index}>
            {profile.to_hit ? profile.to_hit + "+" : "-"}
          </p>
        ))}
      </td>
      <td className="text-center">
        {weapon.profiles.map((profile, index) => (
          <p key={weapon.name + "ap" + index}>
            {typeof profile.ap === "number"
              ? profile.ap
                ? `-${profile.ap}`
                : profile.ap
              : profile.ap}
          </p>
        ))}
      </td>
      <td className="px-2">
        {weapon.profiles.map((profile, index) => (
          <div
            key={weapon.name + "traits" + index}
            className="flex flex-wrap gap-1"
          >
            {profile.traits.length ? (
              profile.traits.map((trait, index) => (
                <div key={weapon.name + "traits" + index} className="flex">
                  <WeaponTraitBox trait={trait} />
                  {index < profile.traits.length - 1 ? "," : "."}
                </div>
              ))
            ) : (
              <br />
            )}
          </div>
        ))}
      </td>
    </tr>
  ));

  return (
    <main className="max-w-screen-xl w-full h-full dataslate_background p-4 flex flex-col items-center">
      <h2 className="font-graduate font-semibold text-2xl text-center text-green-950">
        WEAPON LIST:
      </h2>

      <div className="text-center">
        <label
          htmlFor="search"
          className="font-graduate text-xl text-green-950"
        >
          Search:
        </label>
        <input
          type="text"
          name="search"
          id="search"
          className="bg-inherit border border-green-950 text-green-950 rounded-md ml-2 px-2 font-graduate"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>

      <table className="w-full max-w-screen-md mt-4 border-2 border-black">
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
    </main>
  );
};

export default page;
