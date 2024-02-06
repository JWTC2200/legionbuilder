import { specialRulesData } from "../data/special_rule_data"
import { SPECIAL_RULE } from "../types/types"

const SpecialRuleBox = ({ rule }: { rule: SPECIAL_RULE }) => {
	const description = specialRulesData.find((ruleEntry) => ruleEntry.name.toLowerCase() === rule.name.toLowerCase())
	return (
		<div className="cursor-pointer hover:text-primary-800 active:text-primary-800 relative group capitalize">
			{rule.name}
			{rule.value ? ` (${rule.value})` : null}
			{description && description.tooltip ? (
				<article
					id="special_rule"
					className="absolute hidden p-1 border-2 border-primary-950 bg-primary-50 group-hover:block rounded-lg w-max max-w-[200px] sm:max-w-[300px] -top-2 left-0 -translate-y-full z-20 text-primary-950 text-center normal-case">
					{description.tooltip}
					<div className="bottom-0 absolute h-0 w-0 border-x-[20px] border-x-transparent border-t-[8px] border-b-primary-50 translate-y-full left-4"></div>
				</article>
			) : null}
		</div>
	)
}

export default SpecialRuleBox
