import { DETACHMENT_TYPE } from "@type/types"
import Icons from "@components/Icons"

const matchIcon: { [key: string]: string } = {
	[DETACHMENT_TYPE.hq]: "skull",
	[DETACHMENT_TYPE.core]: "shield",
	[DETACHMENT_TYPE.support]: "bullets",
	[DETACHMENT_TYPE.vanguard]: "gothicCross",
	[DETACHMENT_TYPE.light]: "apc",
	[DETACHMENT_TYPE.battle]: "tank",
	[DETACHMENT_TYPE.heavy]: "tankTread",
	[DETACHMENT_TYPE.artillery]: "cannon",
	[DETACHMENT_TYPE.air]: "jetFighter",
	[DETACHMENT_TYPE.bastion]: "tower",
	[DETACHMENT_TYPE.transport]: "arrowUp",
	[DETACHMENT_TYPE.knight]: "knight",
	[DETACHMENT_TYPE.titan]: "cog",
	[DETACHMENT_TYPE.dedicated]: "arrowUp",
}

export const getDetachmentIcon = (type: DETACHMENT_TYPE) => {
	return Icons[matchIcon[type]]
}
