export const rerollSuccess = (save: number) => {
	return save - (1 - save) * save
}

export const rerollFail = (save: number) => {
	return save + (1 - save) * save
}
;``
