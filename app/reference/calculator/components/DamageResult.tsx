import { calculatorTarget } from "../state"
import calculateDamage from "../utils/calculateDamage"
import { WEAPON_PROFILES } from "@/app/types/types"

const DamageResult = ({ weapon }: { weapon: WEAPON_PROFILES }) => {
	const { calcTargets } = calculatorTarget()

	return <div>{calcTargets ? calculateDamage(weapon, calcTargets) : 0}</div>
}

export default DamageResult
