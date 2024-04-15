interface update {
	date: string
	updates: string[]
}

export const updateData: update[] = [
	{
		date: "15/04/24",
		updates: [
			"Added formation special rules to the reference.",
			"Added a button to the builder to display formation info.",
		],
	},
	{
		date: "11/04/24",
		updates: [
			"Changed a list builder warning from no more than 30% allies to 70% of list must be from the main faction. This is just a friendly warning when making matched play list and doesn't prevent you from making lists ignoring matched play requirements.",
			"Fixed an issue with trying to view a Tank Commanders non-existent dataslate",
			"Corrected an error with additional Dreadnought Drop pods",
		],
	},
	{
		date: "12/03/24",
		updates: ["Should properly show each formations legion. It was saving but not displaying properly"],
	},
	{
		date: "07/03/24",
		updates: ["Added Spartan sponson loadouts"],
	},
	{
		date: "06/03/24",
		updates: ["Few fixes with points"],
	},
	{
		date: "02/03/24",
		updates: [
			"Titandeath mode selector when creating a list from the list page.",
			"Resizing of the formation boxes in the builder. Should look a bit nicer on desktop",
		],
	},
	{ date: "24/02/24", updates: ["Added missing Fire Raptor turret weapon options"] },
	{
		date: "20/02/24",
		updates: [
			"Additional wing weapon options for SA Lightnings & Marauders",
			"Added missing nose weapon option for Avengers",
			"Added a widget at the bottom of the builder page to show some list details",
		],
	},
	{ date: "18/02/24", updates: ["Login should persist between sessions"] },
	{
		date: "15/02/24",
		updates: ["Saving lists now requires an account", "Password reset added to the login page"],
	},
	{
		date: "13/02/24",
		updates: ["Changed the detachment infomation popup in the builder", "Changed look of builder & view pages"],
	},
	{ date: "06/02/24", updates: ["Added a sidebar for upgrades/loadouts."] },
	{ date: "26/01/24", updates: ["Added a duplicate formation button to the builder"] },
	{ date: "07/01/24", updates: ["Typo fixes"] },
	{
		date: "04/01/24",
		updates: [
			"Increased the amount of Rhinos that can be selected for a Demi-company transports.",
			"Older lists will need to remake the formation to see the changes.",
		],
	},
	{
		date: "21/12/23",
		updates: [
			"Bug fixes",
			"Calculator now calculates damage to structures",
			"Added detachment reference popups for the builder and view pages",
			"In the builder its a small 'i' next to detachment size",
			"In view click on a detachment name",
			"Hope everyone has a nice Christmas! ",
		],
	},
	{
		date: "19/12/23",
		updates: ["Added sorting for user lists. Default sorting is created/last editted"],
	},
	{
		date: "18/12/23",
		updates: ["Changed game points to an input instead of a dropdown for custom game sizes."],
	},
	{
		date: "12/12/23",
		updates: ["Added a damage calculator in the references section, feedback appreciated."],
	},
	{ date: "11/12/23", updates: ["Dire wolf titan can now select carapace weapon", "Fixed some typos"] },
	{
		date: "10/12/23",
		updates: [
			"Bunch of color and style changes to the site.",
			"Fixed issue with links from the /view page having two query strings T_T (noob)",
			"Added feature to duplicate a list from the /lists page.",
		],
	},
	{
		date: "09/12/23",
		updates: [
			"Fixed Tank Commanders for SA Armored Company counting towards formation break. Might need to reselect the detachment or even formation to fix it for old saved lists.",
			"Fixed Sicaran Omega plasma array, AP -1 to AP -2",
			"Removed Anti-tank from Wing bombs",
		],
	},
	{
		date: "08/12/23",
		updates: [
			"Fixed Tarantulas adding to formation break (they shouldn't as they have Automated Sentry)",
			"Added subfaction selection. Currently just legions for Astartes.",
		],
	},
	{
		date: "06/12/2023",
		updates: [
			" Added a button to the top of the list view page. Adds the page address to your clipboard so you can share the list.",
			"Added formation strength and break points in builder and view. Lists saved before this update won't calculate properly for Knights & Titans until you reselect the option in the builder (you will also have to save it again!).",
		],
	},
	{
		date: "05/12/2023",
		updates: ["Updated navigation", "Updated weapon references", "Weapon trait & special rule tooltips (testing)"],
	},
	{
		date: "04/12/2023",
		updates: ["Discord added", "List builder updated", "Unit data fixes"],
	},
	{
		date: "02/12/2023",
		updates: [" Removing the print cards feature as I might be going a too far."],
	},
	{
		date: "30/11/2023",
		updates: [
			"Bit of styling on the /build page",
			" For convenience I've added a direct link to the print page in the Lists tab if you don't want to go through the builder.",
		],
	},
	{
		date: "29/11/2023",
		updates: [" Added accounts and a database for list storage"],
	},
	{
		date: "28/11/2023",
		updates: [" On request I've added the Quick Start Guide Legion Astranii Class Augumented Spearhead formation."],
	},
	{
		date: "27/11/2023",
		updates: [
			"Fixes here and there, huge thanks to everyone who helped and messaged me! Added some warnings/reminders when buildings lists and a minimize formation button for easier viewing/use.",
		],
	},
	{
		date: "26/11/2023",
		updates: [
			"For fun I've added in titan weapon options if they're a single unit titan (so not the warhounds). Doesn't add much unless you    like to see your titan weapons on the print page :D",
		],
	},
	{
		date: "25/11/2023",
		updates: [
			" A few fixes. Also updated the builder to highlight detachments & upgrades if one has been selected. Hope this makes it easier to    view and use.",
		],
	},
	{
		date: "24/11/2023",
		updates: [
			" Added a couple widgets and navigation links to make using the builder easier for mobiles. Changed the style so hopefully it's easier for mobile users.",
		],
	},
	{
		date: "23/11/2023",
		updates: [
			"Added a couple widgets and navigation links to make using the    builder easier for mobiles. Changed the style so hopefully it's    easier for mobile users.",
		],
	},
	{
		date: "23/11/2023",
		updates: [
			" Hopefully fixed the issue with changing detachments & uprades    without breaking anything else. Added a contact link above.",
		],
	},
	{
		date: "22/11/2023",
		updates: ["Added Solar Auxilia and Titans"],
	},
	{
		date: "21/11/2023",
		updates: ["Added Knights, Warhound Titan & Legiones Astartes."],
	},
]
