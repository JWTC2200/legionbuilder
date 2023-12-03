import React from "react";
import {weaponTraitsData} from "../data/weapon_traits_data";
import {WEAPON_TRAIT} from "../types";

const WeaponTraitBox = ({trait}: { trait: WEAPON_TRAIT }) => {
    const description = weaponTraitsData.find(
        (weapon) => weapon.name.toLowerCase() === trait.name.toLowerCase()
    );

    return (
        <span className="relative group capitalize">
            <span className="cursor-help underline decoration-dotted hover:text-lime-700">{`${trait.name}${trait.value ? ` (${trait.value})` : ''}`}</span>
            {description?.tooltip ? (
                <div className="absolute hidden group-hover:block z-20 -bottom-2 right-0 translate-y-full text-center w-max max-w-[200px] sm:max-w-[300px]">
                  <div className="clipped bg-lime-900 text-lime-50 p-1 px-2 normal-case">{description?.tooltip ? description.tooltip : null}</div>
                  <div className="top-0 absolute h-0 w-0 border-x-8 border-x-transparent border-b-[8px] border-b-lime-900 -translate-y-full right-8"></div>
                </div>
            ) : null}
            <span className="group-last:hidden">,&nbsp;</span>
        </span>
    );
};

export default WeaponTraitBox;
