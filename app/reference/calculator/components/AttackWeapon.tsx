"use client"

import { WEAPON_DATASHEET } from "@/app/types"
import { Row } from "@/app/components/HTML"
import React from "react"
import AttackWeaponProfiles from "./AttackWeaponProfiles"
import { CgCloseR } from "@react-icons/all-files/cg/CgCloseR"
import { calculatorWeapons } from "../state"

const AttackWeapon = ({ weapon }: { weapon: WEAPON_DATASHEET }) => {
	const { calcWeapons, calcUnit, setCalcWeapons } = calculatorWeapons()
	const hideWeapon = () => {
		setCalcWeapons({ weapons: calcWeapons.filter((arrayWeapon) => arrayWeapon.id !== weapon.id), name: calcUnit })
	}

	return (
		<Row>
			<div className="pl-2 font-graduate flex flex-wrap ">
				<button onClick={hideWeapon} className="mr-1 flex items-center hover:text-red-600">
					<CgCloseR />
				</button>{" "}
				{weapon.name}
			</div>
			{weapon.profiles.map((profile, index) => (
				<AttackWeaponProfiles key={weapon.id + weapon.name + index} profile={profile} name={weapon.name} />
			))}
		</Row>
	)
}

export default AttackWeapon
