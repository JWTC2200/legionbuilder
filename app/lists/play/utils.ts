export const orderColorStyle = (order: string | undefined): string => {
	if (order === "firstfire") {
		return "text-yellow-400"
	} else if (order === "advance") {
		return "text-primary-500"
	} else if (order === "march") {
		return "text-blue-500"
	} else if (order === "charge") {
		return "text-red-600"
	} else if (order === "fallback") {
		return "text-purple-400"
	} else if (order === "activated") {
		return "text-secondary-600"
	}

	return ""
}
