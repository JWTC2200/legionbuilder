import { JSX } from "react";
import WeaponProfile from "./WeaponProfile";

export default function({ weapon }: {weapon: Object}): JSX.Element {
    return (
        <div className="flex flex-col even:bg-stone-300 odd:bg-stone-100 text-stone-950">
            <h3 className="font-graduate font-bold uppercase border-b border-stone-400 px-4 py-1">{weapon.name}</h3>
            <div className="px-4">
                {weapon.profiles.map((profile, index) => <WeaponProfile profile={profile} weapon={weapon} key={weapon.name+"profile"+index} />)}
            </div>
        </div>
    );
}
