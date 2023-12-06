import { JSX } from "react";
import { WEAPON_DATASHEET } from "@/app/types";
import WeaponProfile from "./WeaponProfile";

export default function ({
  weapon,
}: {
  weapon: WEAPON_DATASHEET;
}): JSX.Element {
  return (
    <div className="flex flex-col odd:bg-secondary-100 even:bg-secondary-300 text-secondary-950 py-1 group">
      <h3 className="block font-graduate font-bold uppercase border-b group-odd:border-secondary-400 group-even:border-secondary-500 px-4 py-1 overflow-hidden">
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
