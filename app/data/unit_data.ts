import { UNIT_DATASHEET } from "@type/types"
import { astartes } from "@data/unitData/astartes"
import { solar } from "@data/unitData/solar"
import { strategicAssets } from "@data/unitData/strategicAssets"
import { uniqueUnits } from "@data/unitData/uniqueUnits"
import { mechanicum } from "@data/unitData/mechanicum"
import { darkMechanicum } from "@data/unitData/darkMechanicum"

// astartes 1000-1999, solar 2000-2999, knights-titans 4000-4999, unique units 9001

export const unitData: UNIT_DATASHEET[] = [
	...astartes,
	...solar,
	...mechanicum,
	...darkMechanicum,
	...strategicAssets,
	...uniqueUnits,
]
