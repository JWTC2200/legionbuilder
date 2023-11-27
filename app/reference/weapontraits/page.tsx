"use client";

import { weaponTraitsData } from "@/app/data/weapon_traits_data";
import React, { useState } from "react";
import Link from "next/link";

const page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const sortedTraits = weaponTraitsData.sort((a, b) => {
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

  const filteredTraits = sortedTraits.filter((trait) =>
    trait.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <main className="h-full dataslate_background p-4 flex flex-col items-center">
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
      <ul className="list-disc text-green-950 ml-4">
        {filteredTraits.map((trait) => (
          <Link
            key={trait.name}
            href={`/reference/weapontraits/${trait.name.replaceAll(" ", "_")}`}
          >
            <li>{trait.name}</li>
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default page;
