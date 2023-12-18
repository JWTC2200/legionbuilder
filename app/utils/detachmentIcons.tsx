import { DETACHMENT_TYPE } from "../types"
import { APC, ArrowUp, Bullets, Cannon, Cog, GothicCross, JetFighter, Knight, Shield, Skull, Tank, TankTread, Tower } from "@components/Icons"

const detachmentIcons: { [key: string]: React.ReactNode } = {
	[DETACHMENT_TYPE.hq]: <Skull />,
	[DETACHMENT_TYPE.core]: <Shield />,
	[DETACHMENT_TYPE.support]: <Bullets />,
	[DETACHMENT_TYPE.vanguard]: <GothicCross />,
	[DETACHMENT_TYPE.light]: <APC />,
	[DETACHMENT_TYPE.battle]: <Tank />,
	[DETACHMENT_TYPE.heavy]: <TankTread />,
	[DETACHMENT_TYPE.artillery]: <Cannon />,
	[DETACHMENT_TYPE.air]: <JetFighter />,
	[DETACHMENT_TYPE.bastion]: <Tower />,
	[DETACHMENT_TYPE.transport]: <ArrowUp />,
	[DETACHMENT_TYPE.knight]: <Knight />,
	[DETACHMENT_TYPE.titan]: <Cog />,
}

export const getDetachmentIcon = (type: DETACHMENT_TYPE) => {
	return detachmentIcons[type]
}
