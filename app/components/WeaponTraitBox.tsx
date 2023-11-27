import React from "react";
import { weaponTraitsData } from "../data/weapon_traits_data";
import { WEAPON_TRAIT } from "../types";

const WeaponTraitBox = ({ trait }: { trait: WEAPON_TRAIT }) => {
  const description = weaponTraitsData.find(
    (weapon) => weapon.name.toLowerCase() === trait.name.toLowerCase()
  );

  return (
    <div className="relative cursor-pointer underline decoration-dotted hover:text-green-950 active:text-green-800 relative group capitalize">
      {trait.name}
      {trait.value ? ` (${trait.value})` : null}
      {description?.tooltip ? (
        <article className="absolute hidden p-1 border-2 border-green-950 bg-green-50 group-hover:block bg-white rounded-lg w-max max-w-[150px] sm:max-w-[250px] -bottom-2 right-0 translate-y-full z-20 text-center normal-case">
          {description?.tooltip ? description.tooltip : null}
          <div className="top-0 absolute h-0 w-0 border-x-[20px] border-x-transparent border-b-[8px] border-b-green-950 -translate-y-full right-4"></div>
        </article>
      ) : null}
    </div>
  );
};

export default WeaponTraitBox;
