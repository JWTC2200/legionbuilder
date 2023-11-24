import React from "react";
import { weaponTraitsData } from "../data/weapon_traits_data";

const WeaponTraitBox = ({ trait }: { trait: string }) => {
  const description = weaponTraitsData.find(
    (weapon) => weapon.name.toLowerCase() === trait.toLowerCase()
  );

  return (
    <p className="cursor-pointer underline decoration-dotted hover:text-green-800 active:text-green-800 relative group capitalize">
      {trait}
      {description ? (
        <span className="absolute bottom-0 left-0 bg-white hidden group-hover:block group-active:block group-hover:text-black group-active:text-black translate-y-full z-20">
          {description.description}
        </span>
      ) : null}
    </p>
  );
};

export default WeaponTraitBox;
