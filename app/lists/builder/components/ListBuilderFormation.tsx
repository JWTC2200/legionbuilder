"use client";

import { BUILDER_FORMATION, FACTION, SLOTSET } from "@/app/types";
import React, { useState } from "react";
import ListBuilderFormationSelector from "./ListBuilderFormationSelector";
import ListBuilderFormationToggle from "./ListBuilderFormationToggle";
import ListBuilderFormationRemoveBtn from "./ListBuilderFormationRemoveBtn";
import FormationBreakHtml from "../../view/components/FormationBreakHtml";
import ListBuilderFormationSections from "./ListBuilderFormationSections";
import { ListBuilderFormationSubfactionSelector } from "./ListBuilderFormationSubfactionSelector";
import ListBuilderFormationSubfactionWarning from "./ListBuilderFormationSubfactionWarning";

const ListBuilderFormation = ({
  formation,
}: {
  formation: BUILDER_FORMATION;
}) => {
  const [viewFormation, setViewFormation] = useState<boolean>(true);

  return (
    <div
      id={formation.ref_id}
      className="sm:border-4 border-primary-950 sm:rounded-xl flex flex-col items-center"
    >
      <div className="w-full banner_background sm:rounded-t-lg flex flex-wrap  justify-center sm:justify-between items-center text-center px-2">
        <ListBuilderFormationToggle
          view={viewFormation}
          toggle={setViewFormation}
        />
        <ListBuilderFormationSelector formation={formation} />
        <ListBuilderFormationRemoveBtn formation={formation} />
      </div>
      <ListBuilderFormationSubfactionWarning formation={formation} />
      {formation.faction === FACTION.astartes ? (
        <ListBuilderFormationSubfactionSelector formation={formation} />
      ) : null}

      {viewFormation ? (
        <>
          <FormationBreakHtml
            formation={formation}
            className="text-black my-2 flex flex-wrap gap-2 font-graduate justify-center"
          />
          {formation.compulsory ? (
            <ListBuilderFormationSections
              formationSubfaction={formation.subfaction}
              formationSection={formation.compulsory}
              sectionType={SLOTSET.compulsory}
              index={0}
            />
          ) : null}
          {formation.optional ? (
            <ListBuilderFormationSections
              formationSubfaction={formation.subfaction}
              formationSection={formation.optional}
              sectionType={SLOTSET.optional}
              index={0}
            />
          ) : null}

          {formation.choice ? (
            <div className="w-full flex flex-col">
              {formation.choice.map((choiceArray, index) => (
                <ListBuilderFormationSections
                  key={formation.ref_id + "choiceSet" + index}
                  formationSubfaction={formation.subfaction}
                  formationSection={choiceArray}
                  sectionType={SLOTSET.choice}
                  index={index}
                />))}
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default ListBuilderFormation;
