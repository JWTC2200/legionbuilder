import { DETACHMENT } from "@type/types"
import { astartes } from "@data/detachments/astartes"
import { solar } from "@data/detachments/solar"
import { strategicAssets } from "@data/detachments/strategicAssets"
import { uniqueDetachments } from "@data/detachments/uniqueDetachments"
import { legends } from "@data/detachments/legends"
import { mechanicum } from "@data/detachments/mechanicum"
import { questorisFamilia } from "@data/detachments/questorisFamilia"
import { darkMechanicum } from "@data/detachments/darkMechanicum"

// astartes 1000-1999, solar 2000-2999, knights-titans 4000-4999, legends 7000-7999, unique detachments 9000-9999

// Detachments require a unique key if they're one-offs. E.g. dedicated transports like multiple Thunderhawks that break standard detachment rules. id: 9000+

export const detachmentData: DETACHMENT[] = [
	...astartes, //1000-1999
	...solar, //2000-2999
	...mechanicum, //3000-3999
	...darkMechanicum, //5000-5999
	...strategicAssets, //4000-4999
	...questorisFamilia, //8000-8099
	...uniqueDetachments, //8100-8199
	...legends, //7000-7999
]
