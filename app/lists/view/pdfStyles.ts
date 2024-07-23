import { Styles } from "@react-pdf/renderer"

export const pdfStyles: Styles = {
	page: {
		flexDirection: "column",
		fontSize: "10px",
		padding: "24px",
	},
	list_info: {
		fontSize: "12px",
		border: "2px",
		marginBottom: "4px",
	},
	list_title: {
		textAlign: "center",
		marginTop: "4px",
	},
	list_details: {
		margin: "8px",
		flexDirection: "column",
		gap: "3px",
	},
	list_name: {
		fontSize: "18px",
		fontWeight: "bold",
		textDecoration: "underline",
	},
	formation: {
		marginBottom: "8px",
		border: "1px",
		padding: "4px",
	},
	formation_name: {
		fontSize: "14px",
		fontWeight: "semibold",
	},
	formation_break_points: {
		marginTop: "4px",
		marginBottom: "4px",
	},
	formation_group: {
		marginBottom: "4px",
	},
	formation_group_type: {
		fontSize: "12px",
		textTransform: "capitalize",
		fontWeight: "heavy",
		textDecoration: "underline",
		marginBottom: "3px",
	},
	detachment: {
		marginBottom: "0px",
	},
	detachment_slot_type: {
		fontSize: "12px",
	},
	box_detachment: {
		marginLeft: "12px",
		flexDirection: "row",
	},
	box_spacing: {
		marginBottom: "1px",
		marginTop: "1px",
	},
	boxes: {
		marginLeft: "3px",
		flexDirection: "row",
		alignItems: "center",
		gap: "3px",
	},
	box_name: {
		marginRight: "2px",
		marginTop: "4px",
	},
	box_unit: {
		flexDirection: "row",
		marginRight: "2px",
	},
	box: {
		height: "8px",
		width: "8px",
		border: "1px",
		marginRight: "1px",
	},
	upgrades: {
		marginLeft: "10px",
		marginTop: "2px",
		marginBottom: "2px",
	},
	loadouts: {
		marginTop: "2px",
		marginBottom: "2px",
		marginLeft: "10px",
	},
	loadout: {
		flexDirection: "row",
		marginBottom: "2px",
	},
	loadout_number: {
		alignSelf: "center",
		marginRight: "4px",
		marginLeft: "2px",
	},
	capitalize: {
		textTransform: "capitalize",
	},
}
