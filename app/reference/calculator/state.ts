import { UNIT_DATASHEET, WEAPON_DATASHEET } from "@/app/types"
import { create } from "zustand"

interface CalcWeapons {
	calcWeapons: WEAPON_DATASHEET[]
	calcUnit: string
	setCalcWeapons: (update: { weapons: WEAPON_DATASHEET[]; name: string }) => void
	clearCalcWeapons: () => void
}

interface TargetUnit {
	calcTargets: UNIT_DATASHEET | null
	setTargetUnit: (update: UNIT_DATASHEET) => void
	clearTargetUnit: () => void
}

export const calculatorWeapons = create<CalcWeapons>((set) => ({
	calcWeapons: [],
	calcUnit: "",
	setCalcWeapons: (update) => set(() => ({ calcWeapons: update.weapons, calcUnit: update.name })),
	clearCalcWeapons: () => set(() => ({ calcWeapons: [], calcUnit: "" })),
}))

export const calculatorTarget = create<TargetUnit>((set) => ({
	calcTargets: null,
	setTargetUnit: (update) => set(() => ({ calcTargets: update })),
	clearTargetUnit: () => set(() => ({ calcTargets: null })),
}))
