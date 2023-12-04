import React from "react";
import ListBuilderGameSize from "./ListBuilderGameSize";
import ListBuilderListName from "./ListBuilderListName";
import ListBuilderAddFormation from "./ListBuilderAddFormation";
import ListBuilderFormationDisplay from "./ListBuilderFormationDisplay";
import ListBuilderButtons from "./ListBuilderButtons";
import ListBuilderQuickLinks from "./ListBuilderQuickLinks";

const ListBuilder = () => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-screen-2xl items-center dataslate_background pb-2 mt-4 pb-20 sm:px-4 lg:rounded-xl">
      <ListBuilderButtons />
      <ListBuilderGameSize />
      <ListBuilderListName />
      <ListBuilderAddFormation />
      <ListBuilderQuickLinks />
      <ListBuilderFormationDisplay />
    </div>
  );
};

export default ListBuilder;
