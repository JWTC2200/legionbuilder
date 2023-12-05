import WeaponTraitBox from "@components/WeaponTraitBox";

export default function({profile, weapon}: {profile: Object, weapon: Object}) {
    return (
        <div className="flex border-b group-odd:border-stone-300 group-even:border-stone-400 last:border-0 py-1 group/profile">
            <div className="basis-[16%]">{profile.range ? profile.range : "-"}</div>
            <div className="basis-[12%] text-center">{profile.dice ? profile.dice : "-"}</div>
            <div className="basis-[12%] text-center">{profile.to_hit ? profile.to_hit + "+" : "-"}</div>
            <div className="basis-[12%] text-center">
                {typeof profile.ap === "number"
                ? profile.ap
                    ? `-${profile.ap}`
                    : profile.ap
                : profile.ap}
            </div>
            <div className="basis-[48%] flex flex-wrap grow-0">
                {profile.traits.map((trait, index) => <WeaponTraitBox trait={trait} key={profile.range+index+trait.name} />)}
            </div>
        </div>
    );
}