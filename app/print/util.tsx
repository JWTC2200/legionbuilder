import {
  BUILDER_FORMATION,
  BUILDER_DETACHMENT_SLOT,
  BUILDER_DETACHMENT_UNIT_UPGRADES,
  BUILDER_LIST,
} from "../types";
import { detachmentPoints, detachmentSize } from "../builder/utils";
import { detachmentData } from "../data/detachment_data";

export const formationHTML = (formation: BUILDER_FORMATION) => {
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

export const slotHTML = (slot: BUILDER_DETACHMENT_SLOT) => {
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

export const upgradesHTML = (
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

export const listCards = (list: BUILDER_LIST) => {
  const unitIds = list.formations.map((formation) => {
    const compulsoryIds = formation.compulsory?.map(
      (slot) => slot.selected_unit?.id
    );
    const optionIds = formation.optional?.map((slot) => {
      slot.selected_unit?.id;
    });
    const choiceIds = formation.choice?.map((array) => {
      array.map((slot) => {
        slot.selected_unit?.id;
      });
    });
    return [compulsoryIds, optionIds, choiceIds];
  });

  const filteredFlatIds = Array.from(
    new Set(
      unitIds
        .flat()
        .flat()
        .filter((id) => {
          return id !== undefined;
        })
    )
  );

  const relatedIds = Array.from(
    new Set(
      filteredFlatIds
        .map((id) => {
          const related = detachmentData.find(
            (detachment) => detachment.id === id
          )!;
          return [related.main_unit, related.related_unit].flat();
        })
        .flat()
    )
  );

  return relatedIds;
};
