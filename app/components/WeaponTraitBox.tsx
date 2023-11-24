import React from "react";
import { weaponTraitsData } from "../data/weapon_traits_data";
import { WEAPON_TRAIT } from "../types";

const WeaponTraitBox = ({ trait }: { trait: WEAPON_TRAIT }) => {
  const description = weaponTraitsData.find(
    (weapon) => weapon.name.toLowerCase() === trait.name.toLowerCase()
  );

  return (
    <p className="cursor-pointer underline decoration-dotted hover:text-green-800 active:text-green-800 relative group capitalize">
      {trait.name}
      {trait.value ? ` (${trait.value})` : null}
    </p>
  );
};

export default WeaponTraitBox;
