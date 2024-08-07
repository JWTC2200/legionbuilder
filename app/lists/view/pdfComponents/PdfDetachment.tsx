import React from "react"
import { List, ListDetachment } from "@type/listTypes"
import { StyleSheet, Text, View } from "@react-pdf/renderer"
import { pdfStyles } from "@lists/view/pdfStyles"
import { currentDetachmentSize, totalDetachmentPoints } from "@lists/builder/components/detachment/utils"
import { findDetachmentSlot, findLoadoutBySlotId, findUpgradeBySlotId } from "@lists/builder/utils"

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
				<Text style={styles.detachment_slot_type}>
					{detachment.slot_type ? detachment.slot_type : findDetachmentSlot(list, detachment).type}
				</Text>
				: {detachment.name} ({currentDetachmentSize(list, detachment.slot_id)}),{" "}
				{totalDetachmentPoints(list, detachment.slot_id)}pts
			</Text>

			{upgrades?.length ? (
				<View style={styles.upgrades}>
					{upgrades.map((upgrade, index) => {
						const upgradeCost =
							list.gamemode === "titandeath" && upgrade.td_ek
								? upgrade.td_ek + upgrade.cost
								: upgrade.cost
						return (
							<Text key={`pdf-upgrades-${detachment.slot_id}-${index}`}>
								{upgrade.number} {upgrade.name} {upgradeCost}pts
							</Text>
						)
					})}
				</View>
			) : null}

			{loadouts?.length ? (
				<View style={styles.loadouts}>
					<Text>Loadouts: </Text>
					{loadouts.map((loadout, index) => {
						return (
							<View style={styles.loadout} key={`pdf-loadout-${detachment.slot_id}-${index}`}>
								<Text style={styles.loadout_number}>{loadout.number}x</Text>
								<View>
									{loadout.weapons.map((weapon, indexTwo) => {
										return (
											<Text key={`pdf-loadout-${detachment.slot_id}-${index}-${indexTwo}`}>
												{weapon.location}: {weapon.weapon}
												{weapon.cost ? `, ${weapon.cost}pts` : ""}
											</Text>
										)
									})}
								</View>
							</View>
						)
					})}
				</View>
			) : null}
		</View>
	)
}

export default PdfDetachment
