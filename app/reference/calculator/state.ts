import { UNIT_DATASHEET, WEAPON_DATASHEET } from "@/app/types"
import { create } from "zustand"

export interface CALCWEAPON extends WEAPON_DATASHEET {
	number: number
}

interface CalcWeapons {
	calcWeapons: CALCWEAPON[]
	setCalcWeapons: (update: CALCWEAPON[]) => void
	clearCalcWeapons: () => void
}

interface TargetUnit {
	calcTargets: UNIT_DATASHEET[]
	setTargetUnit: (update: UNIT_DATASHEET[]) => void
	clearTargetUnit: () => void
}

export const calculatorWeapons = create<CalcWeapons>((set) => ({
	calcWeapons: [],
	setCalcWeapons: (update) => set(() => ({ calcWeapons: update })),
	clearCalcWeapons: () => set(() => ({ calcWeapons: [] })),
}))

export const calculatorTarget = create<TargetUnit>((set) => ({
	calcTargets: [],
	setTargetUnit: (update) => set(() => ({ calcTargets: update })),
	clearTargetUnit: () => set(() => ({ calcTargets: [] })),
}))
