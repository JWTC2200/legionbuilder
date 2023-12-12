import {
	DETACHMENT,
	FORMATION,
	UNIT_DATASHEET,
	WEAPON_DATASHEET,
} from "../types"

export const sortedByNameKey = (
	array: FORMATION[] | DETACHMENT[] | UNIT_DATASHEET[] | WEAPON_DATASHEET[]
) => {
	return array.sort((a, b) => {
		const nameA = a.name.toUpperCase()
		const nameB = b.name.toUpperCase()

		if (nameA < nameB) {
			return -1
		}

		if (nameA > nameB) {
			return 1
		}

		return 0
	})
}
