import { JSX } from "react";
import WeaponTraitBox from "@components/WeaponTraitBox";

interface WeaponProps {
    weapon: Object;
}

export function WeaponRow({ weapon }: WeaponProps): JSX.Element {
    return (
        <div className="flex flex-col even:bg-stone-300 odd:bg-stone-100 text-stone-950 py-1">
            <div className="border-b border-stone-400 px-4">{weapon.name}</div>
            <div className="flex px-4">
                <div className="w-[15%]">
                    {weapon.profiles.map((profile, index) => (
                        <p key={weapon.name + "range" + index}>{profile.range ? profile.range : "-"}</p>
                    ))}
                </div>
                <div className="w-[15%] text-center">
                    {weapon.profiles.map((profile, index) => (
                        <p key={weapon.name + "dice" + index}>{profile.dice ? profile.dice : "-"}</p>
                    ))}
                </div>
                <div className="w-[15%] text-center">
                    {weapon.profiles.map((profile, index) => (
                        <p key={weapon.name + "tohit" + index}>
                            {profile.to_hit ? profile.to_hit + "+" : "-"}
                        </p>
                    ))}
                </div>
                <div className="w-[15%] text-center">
                    {weapon.profiles.map((profile, index) => (
                        <p key={weapon.name + "ap" + index}>
                            {typeof profile.ap === "number"
                                ? profile.ap
                                    ? `-${profile.ap}`
                                    : profile.ap
                                : profile.ap}
                        </p>
                    ))}
                </div>
                <div className="w-[40%]">
                    {weapon.profiles.map((profile, index) => (
                        <div key={weapon.name + "traits" + index} className="flex flex-wrap gap-1">
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
                </div>
            </div>
        </div>
    );
}
