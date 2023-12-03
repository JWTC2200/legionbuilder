"use client";

import { useState } from "react";
import { weapons } from "@/app/data/weapon_data";
import WeaponTraitBox from "@components/WeaponTraitBox";
import {WeaponRow} from "@/app/reference/weapons/WeaponRow";

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

    const weaponRows2 = filteredWeapons.map(weapon => <WeaponRow weapon={weapon} key={weapon.id} />)

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
                                    <WeaponTraitBox trait={trait}/>
                                    {index < profile.traits.length - 1 ? "," : "."}
                                </div>
                            ))
                        ) : (
                            <br/>
                        )}
                    </div>
                ))}
            </td>
        </tr>
    ));

    return (
        <main className="h-full w-full max-w-4xl dataslate_background flex flex-col">
            <header className="bg-stone-900 p-4 py-2">
                <h1 className="text-lime-500 text-xl font-graduate">Weapons</h1>
            </header>

            <section>
                <input type="text" name="search" id="search" placeholder="Enter a search term..." className="bg-transparent w-full p-4 text-lime-950 font-graduate placeholder:text-lime-950 focus:outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </section>

            <section className="flex flex-col">
                <header className="flex flex-col bg-lime-950 p-4 py-2">
                    <div className="w-full">Weapon</div>
                    <div className="flex">
                        <div className="w-[15%]">Range</div>
                        <div className="w-[15%] text-center">Dice</div>
                        <div className="w-[15%] text-center">To hit</div>
                        <div className="w-[15%] text-center">AP</div>
                        <div className="w-[40%]">Traits</div>
                    </div>
                </header>

                <section>
                    {weaponRows2}
                </section>
            </section>

            <table className="w-full max-w-screen-md border-2 border-black">
                <thead className="bg-lime-950 text-lime-50">
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
