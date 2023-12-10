import { BUILDER_FORMATION } from "@/app/types";
import React from "react";
import { formationData } from "@/app/data/formation_data";
import { formationPoints } from "../../utils";
import { setBuilderDetachment } from "../utils";
import { listState } from "../state";

const ListBuilderFormationSelector = ({
  formation,
}: {
  formation: BUILDER_FORMATION;
}) => {
  const { list, setList } = listState();
  const chooseFormation = (id: number) => {
    const selectedFormation = id
      ? setBuilderDetachment(id, formation.ref_id)
      : {
          name: "",
          ref_id: formation.ref_id,
          faction: null,
          id: 0,
          choice: null,
          compulsory: null,
          optional: null,
        };
    if (selectedFormation) {
      setList({
        ...list,
        formations: [...list.formations].map((forma) => {
          if (forma.ref_id === formation.ref_id) {
            return { ...selectedFormation };
          }
          return forma;
        }),
      });
    }
  };

  return (
    <div className="flex flex-wrap sm:gap-4 items-center justify-center">
      <select
        className="bg-transparent sm:text-xl py-2 font-graduate text-center max-w-[300px] sm:max-w-[400px] lg:max-w-full outline-none hover:text-primary-400 active:text-primary-400"
        value={formation.id}
        onChange={(e) => {
          chooseFormation(Number(e.target.value));
        }}
      >
        <option value="0" className="text-primary-950">
          SELECT FORMATION
        </option>
        {formationData.map((format) => (
          <option
            key={formation.ref_id + format.name}
            value={format.id}
            className="text-primary-950"
          >
            {format.name}
          </option>
        ))}
      </select>
      {formation.id ? (
        <h3 className="bg-inherit sm:rounded-t-lg sm:text-xl py-2 font-graduate text-center">
          {formationPoints(formation)} points
        </h3>
      ) : null}
    </div>
  );
};

export default ListBuilderFormationSelector;
