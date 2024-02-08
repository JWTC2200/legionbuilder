export const orderColorStyle = (order: string | undefined): string => {
	if (order === "firstfire") {
		return "text-yellow-400"
	}
	if (order === "advance") {
		return "text-primary-500"
	}
	if (order === "march") {
		return "text-blue-400"
	}
	if (order === "charge") {
		return "text-red-600"
	}
	if (order === "fallback") {
		return "text-purple-400"
	}
	return ""
}
