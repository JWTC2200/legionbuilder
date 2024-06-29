import React from "react"
import { StyleSheet, Text, View } from "@react-pdf/renderer"
import { pdfStyles } from "@lists/view/pdfStyles"
import { List, ListDetachment } from "@type/listTypes"
import { currentDetachmentSize } from "@lists/builder/components/detachment/utils"
import { detachmentData } from "@data/detachment_data"
import { findUpgradeBySlotId } from "@lists/builder/utils"

interface properties {
	list: List
	detachment: ListDetachment
}

const PdfDamageBoxes = ({ list, detachment }: properties) => {
	const styles = StyleSheet.create(pdfStyles)

	const unitData = detachmentData.find()
	const upgrades = findUpgradeBySlotId(list, detachment.slot_id)?.upgrades

	return (
		<View style={styles.boxes}>
			{[...Array(currentDetachmentSize(list, detachment.slot_id)).keys()].map((unit) => {
				return <Text style={styles.box} />
			})}
		</View>
	)
}

export default PdfDamageBoxes
