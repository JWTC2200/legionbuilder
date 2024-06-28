import React from "react"
import { StyleSheet, Text, View } from "@react-pdf/renderer"
import { totalFormationPoints } from "@lists/builder/utils"
import PdfBreakPoints from "@lists/view/pdfComponents/PdfBreakPoints"
import { pdfStyles } from "@lists/view/pdfStyles"
import { List, ListFormation } from "@type/listTypes"
import PdfFormationGroup from "@lists/view/pdfComponents/PdfFormationGroup"

interface Properties {
	list: List
	formation: ListFormation
}

const PdfFormation = ({ list, formation }: Properties) => {
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
				return <PdfFormationGroup list={list} formationGroup={group} />
			})}
		</View>
	)
}

export default PdfFormation
