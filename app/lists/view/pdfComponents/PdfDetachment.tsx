import React from "react"
import { List, ListDetachment } from "@type/listTypes"
import { StyleSheet, Text, View } from "@react-pdf/renderer"
import { pdfStyles } from "@lists/view/pdfStyles"
import { currentDetachmentSize, totalDetachmentPoints } from "@lists/builder/components/detachment/utils"
import { findLoadoutBySlotId, findUpgradeBySlotId } from "@lists/builder/utils"
import PdfDamageBoxes from "@lists/view/pdfComponents/PdfDamageBoxes"

interface properties {
	list: List
	detachment: ListDetachment
}
const PdfDetachment = ({ list, detachment }: properties) => {
	const styles = StyleSheet.create(pdfStyles)

	const upgrades = findUpgradeBySlotId(list, detachment.slot_id)?.upgrades
	const loadouts = findLoadoutBySlotId(list, detachment.slot_id)?.loadouts

	return (
		<View style={styles.detachment}>
			<Text>
				<Text style={styles.detachment_slot_type}>{detachment.slot_type}</Text>: {detachment.name} (
				{currentDetachmentSize(list, detachment.slot_id)}), {totalDetachmentPoints(list, detachment.slot_id)}pts
			</Text>
			<PdfDamageBoxes list={list} detachment={detachment} />
			{upgrades?.length ? (
				<View style={styles.upgrades}>
					{upgrades.map((upgrade) => {
						const upgradeCost =
							list.gamemode === "titandeath" && upgrade.td_ek
								? upgrade.td_ek + upgrade.cost
								: upgrade.cost
						return (
							<Text>
								- {upgrade.number} {upgrade.name} {upgradeCost}pts
							</Text>
						)
					})}
					)
				</View>
			) : null}
			{loadouts?.length ? (
				<View style={styles.loadouts}>
					<Text>Loadouts: </Text>
					{loadouts.map((loadout) => {
						return (
							<View style={styles.loadout}>
								<Text style={styles.loadout_number}>x{loadout.number}</Text>
								<View>
									{loadout.weapons.map((weapon) => {
										return (
											<Text>
												{weapon.location}: {weapon.weapon}
												{weapon.cost ? `, ${weapon.cost}pts` : ""}
											</Text>
										)
									})}
								</View>
							</View>
						)
					})}{" "}
				</View>
			) : null}
		</View>
	)
}

export default PdfDetachment
