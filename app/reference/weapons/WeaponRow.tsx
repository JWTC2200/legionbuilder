import { JSX } from "react";
import { WEAPON_DATASHEET } from "@/app/types";
import WeaponProfile from "./WeaponProfile";

export default function ({
  weapon,
}: {
  weapon: WEAPON_DATASHEET;
}): JSX.Element {
  return (
    <div className="flex flex-col odd:bg-stone-100 even:bg-stone-300 text-stone-950 py-1 group">
      <h3 className="block font-graduate font-bold uppercase border-b group-odd:border-stone-400 group-even:border-stone-500 px-4 py-1 overflow-hidden">
        <span className={"whitespace-nowrap"}>{weapon.name}</span>
      </h3>
      <div className="px-4">
        {weapon.profiles.map((profile, index) => (
          <WeaponProfile
            profile={profile}
            weapon={weapon}
            key={weapon.name + "profile" + index}
          />
        ))}
      </div>
    </div>
  );
}
