import { BUILDER_FORMATION } from "@/app/types";
import React from "react";
import { formationBreakPoints } from "../utils";

const FormationBreakHtml = ({
  formation,
  className,
}: {
  formation: BUILDER_FORMATION;
  className?: string;
}) => {
  const breakPoints = formationBreakPoints(formation);
  return (
    <section className={className}>
      <p>Formation Strength: {breakPoints.wounds}</p>
      <p>Break Point: {breakPoints.break}</p>
    </section>
  );
};

export default FormationBreakHtml;
