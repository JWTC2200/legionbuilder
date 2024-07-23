import React from "react"
import { StyleSheet, Text, View } from "@react-pdf/renderer"
import { List, ListFormationGroup } from "@type/listTypes"
import { pdfStyles } from "@lists/view/pdfStyles"
import PdfDetachment from "@lists/view/pdfComponents/PdfDetachment"

interface Properties {
	list: List
	formationGroup: ListFormationGroup
}

const PdfFormationGroup = ({ list, formationGroup }: Properties) => {
	const styles = StyleSheet.create(pdfStyles)

	const groupIds = formationGroup.detachment_slots.map((slot) => slot.id)
	const detachments = list.detachments
		.filter((detachment) => groupIds.includes(detachment.slot_id))
		.filter((detachment) => detachment.id)

	if (!detachments.length) {
		return null
	}

	return (
		<View style={styles.formation_group}>
			<Text style={styles.formation_group_type}>{formationGroup.type}</Text>
			{detachments.map((detachment) => {
				return (
					<PdfDetachment list={list} detachment={detachment} key={`pdf-detachment-${detachment.slot_id}`} />
				)
			})}
		</View>
	)
}

export default PdfFormationGroup
