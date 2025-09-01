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
