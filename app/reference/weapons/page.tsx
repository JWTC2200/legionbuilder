"use client";

import { useState } from "react";
import { weapons } from "@/app/data/weapon_data";
import WeaponRow from "@/app/reference/weapons/WeaponRow";
import ToTopOfPageWidget from "@/app/components/ToTopOfPageWidget";
import NoWeapon from "./NoWeapon";
import { BreadCrumbs, Crumb } from "@components/BreadCrumbs";
import Main from "@components/Main";
import Sticky from "@components/Sticky";

const page = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const sortedWeapons = weapons.sort((a, b) => {
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
    <WeaponRow weapon={weapon} key={weapon.id} />
  ));

  return (
      <Main>
        <Sticky className="z-10">
          <BreadCrumbs>
            <Crumb href="/reference">Reference</Crumb>
            <Crumb href="/reference/weapons">Weapons</Crumb>
          </BreadCrumbs>
          <section>
            <input
                type="text"
                name="search"
                id="search"
                placeholder="Enter a search term..."
                className="bg-dataslate w-full p-4 text-primary-950 font-graduate placeholder:text-primary-950 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          </section>
        </Sticky>

        <section className="flex flex-col">
          <Sticky className="z-10">
            <header className="flex flex-col bg-backgrounds-950">
              <div className="w-full border-b border-primary-600 px-4 py-1">
                Weapon
              </div>
              <div className="flex px-4 py-1 text-sm">
                <div className="basis-[16%]">Range</div>
                <div className="basis-[12%] text-center">Dice</div>
                <div className="basis-[12%] text-center">To hit</div>
                <div className="basis-[12%] text-center">AP</div>
                <div className="basis-[48%]">Traits</div>
              </div>
            </header>
          </Sticky>

          <section className="">
            {weaponRows.length ? weaponRows : <NoWeapon />}
          </section>
        </section>
        <ToTopOfPageWidget />
      </Main>
  );
};

export default page;
