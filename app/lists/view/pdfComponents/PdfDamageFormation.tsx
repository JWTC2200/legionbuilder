import React from "react"
import { List, ListFormation } from "@type/listTypes"
import { StyleSheet, View, Text } from "@react-pdf/renderer"
import { pdfStyles } from "@lists/view/pdfStyles"
import { totalFormationPoints } from "@lists/builder/utils"
import PdfBreakPoints from "@lists/view/pdfComponents/PdfBreakPoints"
import PdfDamageBoxes from "@lists/view/pdfComponents/PdfDamageBoxes"

interface Properties {
	list: List
	formation: ListFormation
}

const PdfDamageFormation = ({ list, formation }: Properties) => {
	const styles = StyleSheet.create(pdfStyles)

	return (
		<View style={styles.formation} wrap={false}>
			<Text style={styles.formation_name}>
				{formation.nickname ? `${formation.nickname}: ` : ""}
				{formation.subfaction ? `${formation.subfaction} - ` : ""}
				{formation.name}, {totalFormationPoints(list, formation)}pts
			</Text>
			<PdfBreakPoints list={list} formation={formation} />
			{formation.detachment_groups.map((group, index) => {
				const groupIds = group.detachment_slots.map((slot) => slot.id)
				const groupDetachments = list.detachments
					.filter((detachment) => groupIds.includes(detachment.slot_id))
					.filter((detachment) => detachment.id)

				if (!groupDetachments.length) {
					return null
				}

				return (
					<View key={`damage-formation-pdf-${formation.id}-${index}`}>
						{groupDetachments.map((detachment, index) => {
							return (
								<PdfDamageBoxes
									list={list}
									detachment={detachment}
									key={`damage-formation-detachment-pdf-${detachment.slot_id}-${index}`}
								/>
							)
						})}
					</View>
				)
			})}
		</View>
	)
}

export default PdfDamageFormation
