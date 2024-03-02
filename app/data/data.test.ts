import { detachmentData } from "./detachment_data"
import { formationData } from "./formation_data"
import { formationSlotData } from "./formation_slot_data"
import { unitData } from "./unit_data"
import { weapons } from "./weapon_data"

const getIds = (array: any): number => {
	const ids = array.map((entry: any) => entry.id)
	const uniqueIds = Array.from(new Set(ids))
	return uniqueIds.length
}

test("Data file entries have unique ids", () => {
	expect(getIds(detachmentData)).toBe(detachmentData.length)
	expect(getIds(formationData)).toBe(formationData.length)
	expect(getIds(weapons)).toBe(weapons.length)
	expect(getIds(unitData)).toBe(unitData.length)
	expect(getIds(formationSlotData)).toBe(formationSlotData.length)
})
