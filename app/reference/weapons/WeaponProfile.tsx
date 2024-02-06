import WeaponTraitBox from "@components/WeaponTraitBox"
import { WEAPON_TRAIT, WEAPON_DATASHEET } from "@/app/types/types"

interface properties {
	range: string
	dice: number | string | null
	to_hit: number | null
	ap: number | string
	traits: WEAPON_TRAIT[]
}

export default function ({ profile, weapon }: { profile: properties; weapon: WEAPON_DATASHEET }) {
	return (
		<div className="flex border-b group-odd:border-secondary-300 group-even:border-secondary-400 last:border-0 py-1 group/profile">
			<div className="basis-[16%]">{profile.range ? profile.range : "-"}</div>
			<div className="basis-[12%] text-center">{profile.dice ? profile.dice : "-"}</div>
			<div className="basis-[12%] text-center">{profile.to_hit ? profile.to_hit + "+" : "-"}</div>
			<div className="basis-[12%] text-center">
				{typeof profile.ap === "number" ? (profile.ap ? `-${profile.ap}` : profile.ap) : profile.ap}
			</div>
			<div className="basis-[48%] flex flex-wrap grow-0">
				{profile.traits.map((trait, index) => (
					<WeaponTraitBox trait={trait} key={profile.range + index + trait.name} />
				))}
			</div>
		</div>
	)
}
