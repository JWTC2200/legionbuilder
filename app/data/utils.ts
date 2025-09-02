// Utility functions for data

// returns the upgrade_options.options array from a type DETACHMENT
export const optionsArray = (
	number: number,
	cost: number,
	multiplier: number,
	breakStrength = 1
): { number: number; cost: number; size: number; breakStrength?: number }[] => {
	let options = []

	for (let i = 1; i <= number; i++) {
		options.push({
			number: i * multiplier,
			cost: i * cost,
			size: i * multiplier,
			break_strength: breakStrength,
		})
	}

	return options
}

export const oneUpgrade = (name: string): string => {
	return `An ${name} can purchase one of the following upgrades:`
}

export const pintleStubberTxt = (name: string): string => {
	return `An ${name} may be equipped with one Pintle Mounted heavy stubber for +5 points per model`
}

export const pintleStubberLd = {
	location: "Pintle",
	options: [
		{ name: "None", cost: 0 },
		{ name: "Heavy Stubber", cost: 5 },
	],
}
