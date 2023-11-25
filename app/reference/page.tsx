import React from "react";
import Link from "next/link";

import {
  GiSwordsEmblem,
  GiChewedSkull,
  GiFlamedLeaf,
  GiFist,
} from "react-icons/gi";

const page = () => {
  return (
    <main className="flex flex-wrap gap-12 p-4 max-w-screen-xl">
      <nav className="flex flex-wrap gap-2">
        <Link
          href="/reference/units"
          className="flex flex-col justify-center items-center text-center font-graduate font-semibold bg-green-950 text-green-950 w-40 h-32 p-2 rounded-xl dataslate_background hover:text-cyan-700 active:text-cyan-700 hover:border-2 hover:border-cyan-700"
        >
          {" "}
          <GiChewedSkull className="text-5xl" />
          Units
        </Link>
        <Link
          href="/reference/specialrules"
          className="flex flex-col justify-center items-center text-center font-graduate font-semibold bg-green-950 text-green-950 w-40 h-32 p-2 rounded-xl dataslate_background hover:text-cyan-700 active:text-cyan-700 hover:border-2 hover:border-cyan-700"
        >
          <GiFist className="text-5xl" />
          Special Rules
          <span className="italic">Not ready</span>
        </Link>
        <Link
          href="/reference/weapons"
          className="flex flex-col justify-center items-center text-center font-graduate font-semibold bg-green-950 text-green-950 w-40 h-32 p-2 rounded-xl dataslate_background hover:text-cyan-700 active:text-cyan-700 hover:border-2 hover:border-cyan-700"
        >
          <GiSwordsEmblem className="text-5xl" />
          Weapons
        </Link>

        <Link
          href="/reference/weapontraits"
          className="flex flex-col justify-center items-center text-center font-graduate font-semibold bg-green-950 text-green-950 w-40 h-32 p-2 rounded-xl dataslate_background hover:text-cyan-700 active:text-cyan-700 hover:border-2 hover:border-cyan-700"
        >
          <GiFlamedLeaf className="text-5xl" />
          Weapon Traits
          <span className="italic">Not ready</span>
        </Link>
      </nav>
    </main>
  );
};

export default page;
