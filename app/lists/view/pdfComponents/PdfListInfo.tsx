import React from "react"
import { StyleSheet, Text, View } from "@react-pdf/renderer"
import { totalListPoints } from "@lists/builder/utils"
import { List } from "@type/listTypes"
import { pdfStyles } from "@lists/view/pdfStyles"

interface Properties {
	list: List
}

const PdfListInfo = ({ list }: Properties) => {
	const styles = StyleSheet.create(pdfStyles)

	return (
		<View style={styles.list_info}>
			<View style={styles.list_title}>
				<Text>
					<Text style={styles.list_name}>{list.name}</Text>:
					{` ${totalListPoints(list).totalPoints} / ${list.points}pts`}
				</Text>
			</View>
			<View style={styles.list_details}>
				<Text style={styles.capitalize}>Game mode: {list.gamemode ? list.gamemode : "Standard"}</Text>
				<Text>
					{list.allegiance} {list.faction}
				</Text>
				<Text>Formations: {list.formations.filter((formation) => formation.name).length}</Text>
			</View>
		</View>
	)
}

export default PdfListInfo
