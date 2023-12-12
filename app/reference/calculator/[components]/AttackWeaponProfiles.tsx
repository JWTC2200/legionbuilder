import { WEAPON_PROFILES } from "@/app/types"
import React from "react"
import DamageResult from "./DamageResult"
import WeaponTraitBox from "@/app/components/WeaponTraitBox"

const AttackWeaponProfiles = ({ profile, name }: { profile: WEAPON_PROFILES; name: string }) => {
	return (
		<div className="flex">
			<div className="basis-[56%] flex flex-wrap pl-2">
				{profile.traits.length ? "- " : ""}
				{profile.traits.map((trait) => (
					<WeaponTraitBox key={name + trait.name} trait={trait} disabled={true} />
				))}
			</div>
			<div className="basis-[22%] text-center">{profile.range}</div>
			<div className="basis-[22%] text-center">
				<DamageResult weapon={profile} />
			</div>
		</div>
	)
}

export default AttackWeaponProfiles
