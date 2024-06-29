import { Styles } from "@react-pdf/renderer"

export const pdfStyles: Styles = {
	page: {
		flexDirection: "column",
		fontSize: "10px",
		padding: "24px",
	},
	list_info: {
		fontSize: "12px",
		border: true,
		borderWidth: "2px",
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
		border: true,
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
		marginBottom: "4px",
	},
	detachment_slot_type: {
		fontSize: "12px",
	},
	boxes: {
		flexDirection: "row",
		gap: "2px",
	},
	box: {
		height: "10px",
		width: "10px",
		border: true,
	},
	upgrades: {
		marginLeft: "10px",
	},
	loadouts: {
		marginTop: "2px",
		marginBottom: "4px",
		marginLeft: "10px",
	},
	loadout: {
		flexDirection: "row",
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
