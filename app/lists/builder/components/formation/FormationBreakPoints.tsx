import { ListFormation } from "@type/listTypes"
import { listState } from "@lists/state"
import { findFormationDetachmentBreakSlotIds } from "@lists/builder/utils"
import { sum } from "@/app/utils/math"

interface properties {
	formation: ListFormation
	className?: string
}

const FormationBreakPoints = ({ formation, className }: properties) => {
	const { list } = listState()

	const slot_ids = findFormationDetachmentBreakSlotIds(formation)

	const detachment_break = sum(
		list.detachments
			.filter((detachments) => slot_ids.includes(detachments.slot_id))
			.map((detachment) => {
				return detachment.break_strength ? detachment.size * detachment.break_strength : detachment.size
			})
	)

	const upgrade_break = sum(
		list.upgrades
			.filter((upgradeSlots) => slot_ids.includes(upgradeSlots.slot_id))
			.map((upgrade) =>
				upgrade.upgrades.map((entry) => {
					return entry.break_strength ? entry.break_strength * entry.size : entry.size
				})
			)
			.flat()
	)

	const breakTotal = detachment_break + upgrade_break
	const breakPoint = Math.ceil(breakTotal / 2)

	return (
		<section className={className}>
			<p>Formation Strength: {breakTotal}</p>
			<p>Break Point: {breakPoint}</p>
		</section>
	)
}

export default FormationBreakPoints
