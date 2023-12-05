"use client";

import { useState } from "react";
import { weapons } from "@/app/data/weapon_data";
import WeaponRow from "@/app/reference/weapons/WeaponRow";

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

    const weaponRows = filteredWeapons.map(weapon => <WeaponRow weapon={weapon} key={weapon.id} />)

    return (
        <main className="h-full w-full max-w-4xl dataslate_background flex flex-col">
            <header className="bg-stone-900 p-4 py-2">
                <h1 className="text-lime-500 text-xl font-graduate">Weapons</h1>
            </header>

            <section>
                <input type="text" name="search" id="search" placeholder="Enter a search term..." className="bg-transparent w-full p-4 text-lime-950 font-graduate placeholder:text-lime-950 focus:outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </section>

            <section className="flex flex-col">
                <header className="flex flex-col bg-lime-950">
                    <div className="w-full border-b border-lime-600 px-4 py-1">Weapon</div>
                    <div className="flex px-4 py-1 text-sm">
                        <div className="basis-[16%]">Range</div>
                        <div className="basis-[12%] text-center">Dice</div>
                        <div className="basis-[12%] text-center">To hit</div>
                        <div className="basis-[12%] text-center">AP</div>
                        <div className="basis-[48%]">Traits</div>
                    </div>
                </header>

                <section>
                    {weaponRows}
                </section>
            </section>
        </main>
    );
};

export default page;
