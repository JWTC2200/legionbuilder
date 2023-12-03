import WeaponTraitBox from "@components/WeaponTraitBox";

export default function({profile, weapon}: {profile: Object, weapon: Object}) {
    return (
        <div className="flex border-b border-stone-300 last:border-0 py-1">
            <div className="w-[15%]">{profile.range ? profile.range : "-"}</div>
            <div className="w-[15%] text-center">{profile.dice ? profile.dice : "-"}</div>
            <div className="w-[15%] text-center">{profile.to_hit ? profile.to_hit + "+" : "-"}</div>
            <div className="w-[15%] text-center">
                {typeof profile.ap === "number"
                ? profile.ap
                    ? `-${profile.ap}`
                    : profile.ap
                : profile.ap}
            </div>
            <div className="w-[40%]" className="flex flex-wrap grow-0 basis-auto">
                {profile.traits.map((trait, index) => <WeaponTraitBox trait={trait} key={profile.range+index+trait.name} />)}
            </div>
        </div>
    );
}