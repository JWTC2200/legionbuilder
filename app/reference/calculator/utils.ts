import { UNIT_TYPE } from "@/app/types"

export const armouredTypes = [UNIT_TYPE.vehicle, UNIT_TYPE.heavy, UNIT_TYPE.knight, UNIT_TYPE.titan]

export const rerollSuccess = (save: number) => {
	return save - (1 - save) * save
}

export const rerollFail = (save: number) => {
	return save + (1 - save) * save
}
;``
