import React from "react";
import { specialRulesData } from "../data/special_rule_data";
import { SPECIAL_RULE } from "../types";

const SpecialRuleBox = ({ rule }: { rule: SPECIAL_RULE }) => {
  const description = specialRulesData.find(
    (ruleEntry) => ruleEntry.name.toLowerCase() === rule.name.toLowerCase()
  );
  return (
    <p className="cursor-pointer hover:text-green-800 active:text-green-800 relative group capitalize">
      {rule.name}
      {rule.value ? ` (${rule.value})` : null}
    </p>
  );
};

export default SpecialRuleBox;
