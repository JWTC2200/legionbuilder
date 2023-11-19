import React from "react";
import { specialRulesData } from "../data/special_rule_data";

const RuleBox = ({ rule }: { rule: string }) => {
  const description = specialRulesData.find(
    (ruleEntry) => ruleEntry.name.toLowerCase() === rule.toLowerCase()
  );
  return (
    <p className="cursor-pointer underline decoration-dotted hover:text-green-800 active:text-green-800 relative group capitalize">
      {rule}
      {description ? (
        <span className="absolute bottom-0 left-0 bg-white hidden group-hover:block group-active:block group-hover:text-black group-active:text-black translate-y-full z-20">
          {description.description}
        </span>
      ) : null}
    </p>
  );
};

export default RuleBox;
