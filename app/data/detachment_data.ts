import { DETACHMENT } from "@type/types"
import { astartes } from "@data/detachments/astartes"
import { solar } from "@data/detachments/solar"
import { strategicAssets } from "@data/detachments/strategicAssets"
import { uniqueDetachments } from "@data/detachments/uniqueDetachments"
import { legends } from "@data/detachments/legends"
import { mechanicum } from "@data/detachments/mechanicum"

// astartes 1000-1999, solar 2000-2999, knights-titans 4000-4999, legends 7000-7999, unique detachments 9000-9999

// Detachments require a unique key if they're one-offs. E.g. dedicated transports like multiple Thunderhawks that break standard detachment rules. id: 9000+

export const detachmentData: DETACHMENT[] = [
	...astartes,
	...solar,
	...mechanicum,
	...strategicAssets,
	...uniqueDetachments,
	...legends,
]
