import { DETACHMENT, FORMATION, UNIT_DATASHEET, UNIT_TYPE, WEAPON_DATASHEET } from "@type/types"

export const sortedByNameKey = (array: FORMATION[] | DETACHMENT[] | UNIT_DATASHEET[] | WEAPON_DATASHEET[]) => {
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

export const sortUnitDatasheets = (datasheets: UNIT_DATASHEET[]): UNIT_DATASHEET[] => {
	const unitType = Object.values(UNIT_TYPE)

	const nameSort = sortedByNameKey(datasheets) as UNIT_DATASHEET[]

	return nameSort.sort((a, b) => {
		const typeA = unitType.indexOf(a.unit_type.type)
		const typeB = unitType.indexOf(b.unit_type.type)

		if (typeA < typeB) return -1
		if (typeA > typeB) return 1
		return 0
	})
}
