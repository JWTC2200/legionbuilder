import React from "react";
import ListBuilderGameSize from "./ListBuilderGameSize";
import ListBuilderListName from "./ListBuilderListName";
import ListBuilderAddFormation from "./ListBuilderAddFormation";
import ListBuilderFormationDisplay from "./ListBuilderFormationDisplay";
import ListBuilderButtons from "./ListBuilderButtons";
import ListBuilderQuickLinks from "./ListBuilderQuickLinks";
import ListBuilderWarnings from "./ListBuilderWarnings";

const ListBuilder = () => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-screen-2xl items-center bg-dataslate pb-2 pb-20 sm:px-4 lg:rounded-xl">
      <ListBuilderButtons />
      <ListBuilderGameSize />
      <ListBuilderListName />
      <ListBuilderWarnings />
      <ListBuilderAddFormation />
      <ListBuilderQuickLinks />
      <ListBuilderFormationDisplay />
    </div>
  );
};

export default ListBuilder;
