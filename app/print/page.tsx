"use client";

import React from "react";
import {
  BUILDER_DETACHMENT_SLOT,
  BUILDER_DETACHMENT_UNIT_UPGRADES,
  BUILDER_FORMATION,
  BUILDER_LIST,
} from "../types";
import {
  detachmentPoints,
  detachmentSize,
  formationPoints,
  listPoints,
} from "../builder/utils";

const page = () => {
  const armyList =
    typeof window !== "undefined"
      ? localStorage.getItem("legionbuilder")
      : null;
  if (armyList) {
    const listJson: BUILDER_LIST = JSON.parse(armyList);

    const formationHTML = (formation: BUILDER_FORMATION) => {
      const compulsorySlots = formation.compulsory
        ? formation.compulsory.map((slot) => slotHTML(slot))
        : null;

      const optionalSlots = formation.optional
        ? formation.optional.map((slot) => slotHTML(slot))
        : null;

      const choiceSlots = formation.choice
        ? formation.choice.map((set) => set.map((slot) => slotHTML(slot)))
        : null;
      return (
        <div>
          {formation.compulsory ? (
            <div className="mb-1">
              <h3 className="font-graduate">Compulsory Slots:</h3>
              <ul className="list-disc">{compulsorySlots}</ul>
            </div>
          ) : null}
          {formation.optional ? (
            <div className="mb-1">
              <h3 className="font-graduate">Optional Slots:</h3>
              <ul className="list-disc">{optionalSlots}</ul>
            </div>
          ) : null}
          {formation.choice && formation.choice.length ? (
            <div className="mb-1">
              <h3 className="font-graduate">Choice slots:</h3>
              <ul className="list-disc">{choiceSlots}</ul>
            </div>
          ) : null}
        </div>
      );
    };

    const slotHTML = (slot: BUILDER_DETACHMENT_SLOT) => {
      if (slot.selected_unit) {
        return (
          <li key={slot.slot_ref} className="ml-4">
            <strong>{slot.type}</strong>: {slot.selected_unit.name}{" "}
            {`(${detachmentSize(slot.selected_unit)})`}
            {", "}
            {detachmentPoints(slot.selected_unit)}pts{}
            {upgradesHTML(slot.selected_unit.upgrade_options, slot.slot_ref)}
          </li>
        );
      }
      return null;
    };

    const upgradesHTML = (
      upgradeArray: BUILDER_DETACHMENT_UNIT_UPGRADES[],
      slot_ref: string
    ) => {
      const upgrades = upgradeArray
        .filter((upgrade) => upgrade.number)
        .map((upgr) => (
          <li key={slot_ref + upgr.name}>
            {upgr.text ? upgr.text : `${upgr.number} ${upgr.name}`}
          </li>
        ));
      if (upgrades.length) {
        return <ul className="text-xs">{upgrades}</ul>;
      }
      return null;
    };

    return (
      <main className="w-full min-h-screen bg-slate-50 text-green-950 p-4 flex justify-center">
        <div className="w-full max-w-screen-lg">
          <div className="mb-2">
            <h1 className="font-bold font-subrayada text-xl">
              {listJson.list_name}
            </h1>
            <h2 className="font-bold font-graduate">
              List total:{" "}
              {listPoints(listJson).allyFactionPoints +
                listPoints(listJson).mainFactionPoints}{" "}
              points
            </h2>
            <h2 className="font-bold font-graduate">
              Main faction: {listJson.main_faction}
            </h2>
          </div>
          {listJson.formations.map((formation, index) => (
            <div key={"formaton" + index} className="text-sm mb-2">
              <h3 className="text-base">
                <strong>Formation {index + 1}</strong>: {formation.name}
                {", "}
                {formationPoints(formation)}points
              </h3>
              {formationHTML(formation)}
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-slate-50 justify-center items-center text-center">
      <h2>No list found</h2>
    </main>
  );
};

export default page;
