import React from "react"
import { FORMATION_RULES } from "@type/types"

interface properties {
	rule: FORMATION_RULES
}
function FormationRule({ rule }: properties) {
	return (
		<div className="text-primary-900">
			<span className="font-bold font-graduate">{rule.name}</span>: {rule.text}
		</div>
	)
}

export default FormationRule
