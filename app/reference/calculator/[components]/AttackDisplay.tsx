import React from "react"

import { calculatorWeapons } from "../state"
import { Row } from "@/app/components/HTML"
import DamageResult from "./DamageResult"

const AttackDisplay = () => {
	const { calcWeapons, calcUnit } = calculatorWeapons()

	return (
		<div className="w-full py-4 bg-dataslate clip-path-halfagon-lg">
			<h4 className="bg-backgrounds-950 py-2 font-graduate text-lg text-center mx-4">{calcUnit}</h4>
			<div className="mx-4">
				<header className="flex bg-backgrounds-950 border-t border-primary-400">
					<div className="basis-[60%] pl-2">Weapon</div>
					<div className="basis-[20%] text-center">Range</div>
					<div className="basis-[20%] text-center">Damage</div>
				</header>
				<div className="">
					{calcWeapons.map((weapon, index) => (
						<Row key={weapon.name + index} className="flex">
							<div className="basis-[60%] pl-2">{weapon.name}</div>
							<div className="basis-[40%] flex flex-col text-center">
								{weapon.profiles.map((profile) => (
									<div className="w-full flex">
										<div className="basis-[50%]">{profile.range}</div>
										<div className="basis-[50%]">
											<DamageResult weapon={weapon} />
										</div>
									</div>
								))}
							</div>
						</Row>
					))}
				</div>
			</div>
		</div>
	)
}

export default AttackDisplay
