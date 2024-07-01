import React from "react"
import { StyleSheet, Text, View } from "@react-pdf/renderer"
import { pdfStyles } from "@lists/view/pdfStyles"
import { List, ListDetachment } from "@type/listTypes"
import { currentDetachmentSize, totalDetachmentPoints } from "@lists/builder/components/detachment/utils"
import { detachmentData } from "@data/detachment_data"
import { unitData } from "@data/unit_data"
import { findUpgradeBySlotId } from "@lists/builder/utils"

interface properties {
	list: List
	detachment: ListDetachment
}

interface PdFUnitObject {
	name: string
	number: number
	wounds: number
}

const PdfDamageBoxes = ({ list, detachment }: properties) => {
	const styles = StyleSheet.create(pdfStyles)

	const detachmentInfo = detachmentData.find((entry) => entry.id === detachment.id)!
	const mainUnit = unitData.find((unit) => unit.id === detachmentInfo.main_unit[0])!

	const detachmentObject: PdFUnitObject = {
		name: mainUnit.name,
		number: detachmentInfo.base_size,
		wounds: mainUnit.wounds,
	}

	const upgrades = list.upgrades.find((upgrade) => upgrade.slot_id === detachment.slot_id)!

	const upgradeObjects: PdFUnitObject[] = upgrades.upgrades.map((upgrade) => {
		const unitInfo = unitData.find((unit) => unit.id === upgrade.unit_ref)!

		return { name: unitInfo.name, number: upgrade.size, wounds: unitInfo.wounds }
	})
	const mergeObjects = [...upgradeObjects, detachmentObject]

	const uniqueNames = Array.from(new Set(mergeObjects.map((name) => name.name)))

	const countNumbers: PdFUnitObject[] = uniqueNames.map((name) => {
		const matchedName = mergeObjects.filter((object) => object.name === name)

		return {
			name: name,
			number: matchedName.reduce((acc, sum) => acc + sum.number, 0),
			wounds: matchedName[0].wounds,
		}
	})

	const elements = countNumbers.map((object, index) => {
		return (
			<View style={styles.box_detachment} key={`damage-detachment-pdf-${detachment.slot_id}-${index}`}>
				<Text style-={styles.box_name}>
					{object.name} ({object.number}):
				</Text>
				<View style={styles.boxes}>
					{new Array(object.number).fill(1).map((number, indexTwo) => {
						return (
							<View
								style={styles.box_unit}
								key={`damage-detachment-pdf-${detachment.slot_id}-${index}-${indexTwo}`}>
								{new Array(object.wounds).fill(1).map((number, indexThree) => (
									<Text
										style={styles.box}
										key={`damage-detachment-pdf-${detachment.slot_id}-${index}-${indexTwo}-${indexThree}`}
									/>
								))}
							</View>
						)
					})}
				</View>
			</View>
		)
	})

	return (
		<View>
			<Text style={styles.box_spacing}>
				<Text>{detachment.slot_type}</Text>: {detachment.name} (
				{currentDetachmentSize(list, detachment.slot_id)}), {totalDetachmentPoints(list, detachment.slot_id)}pts
			</Text>
			{elements}
		</View>
	)
}

export default PdfDamageBoxes
