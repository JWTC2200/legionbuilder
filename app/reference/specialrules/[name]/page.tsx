import { specialRulesData } from "@/app/data/special_rule_data";
import { notFound } from "next/navigation";
import React from "react";

const page = ({ params: { name } }: { params: { name: string } }) => {
  const ruleName = name.replaceAll("_", " ");
  const specialRuleEntry = specialRulesData.find(
    (trait) => trait.name.toLowerCase() === ruleName.toLowerCase()
  );
  if (!specialRuleEntry) {
    notFound();
  }
  return (
    <main className="h-full dataslate_background p-4 flex flex-col items-center text-green-950 max-w-lg w-full">
      <h2 className="text-2xl font-graduate font-bold underline w-full text-center mb-4">
        {specialRuleEntry.name}
      </h2>
      {specialRuleEntry.description.map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ))}
    </main>
  );
};

export default page;
