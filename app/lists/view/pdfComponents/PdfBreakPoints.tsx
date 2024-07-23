import React from "react"
import { StyleSheet, Text } from "@react-pdf/renderer"
import { findFormationDetachmentBreakSlotIds } from "@lists/builder/utils"
import { sum } from "@app/utils/math"
import { ListFormation, List } from "@type/listTypes"
import { pdfStyles } from "@lists/view/pdfStyles"

interface Properties {
	list: List
	formation: ListFormation
}

const PdfBreakPoints = ({ list, formation }: Properties) => {
	const styles = StyleSheet.create(pdfStyles)
	const slot_ids = findFormationDetachmentBreakSlotIds(formation)

	const detachment_break = sum(
		list.detachments
			.filter((detachments) => slot_ids.includes(detachments.slot_id))
			.map((detachment) => {
				if (detachment.break_strength === 0) {
					return 0
				}
				return detachment.break_strength ? detachment.size * detachment.break_strength : detachment.size
			})
	)

	const upgrade_break = sum(
		list.upgrades
			.filter((upgradeSlots) => slot_ids.includes(upgradeSlots.slot_id))
			.map((upgrade) =>
				upgrade.upgrades.map((entry) => {
					if (entry.break_strength === 0) {
						return 0
					}
					return entry.break_strength ? entry.break_strength * entry.size : entry.size
				})
			)
			.flat()
	)

	const breakTotal = detachment_break + upgrade_break
	const breakPoint = Math.ceil(breakTotal / 2)

	return (
		<Text style={styles.formation_break_points}>
			Formation Strength: {breakTotal} Break Point: {breakPoint}
		</Text>
	)
}

export default PdfBreakPoints
