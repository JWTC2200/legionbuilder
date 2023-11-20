"use client";

import React, { useState, useEffect } from "react";
import {
  BUILDER_DETACHMENT_SLOT,
  BUILDER_DETACHMENT_UNIT_UPGRADES,
} from "@/app/types";
import { detachmentData } from "@/app/data/detachment_data";

const BuilderUnitUpgradeSelect = ({
  unitId,
  upgradeOption,
  setSlotState,
  keyId,
}: {
  unitId: number;
  upgradeOption: BUILDER_DETACHMENT_UNIT_UPGRADES;
  setSlotState: React.Dispatch<React.SetStateAction<BUILDER_DETACHMENT_SLOT>>;
  keyId: string;
}) => {
  const [selectState, setSelectState] = useState(upgradeOption);

  const detachmentUpgrades = detachmentData.find(
    (detachment) => detachment.id === unitId
  );

  if (!detachmentUpgrades) {
    return null;
  }

  const upgradeObject = detachmentUpgrades.upgrade_options?.find(
    (upgrade) => upgrade.name === upgradeOption.name
  );

  if (!upgradeObject) {
    return null;
  }

  const handleSelect = (id: number) => {
    if (!id) {
      setSelectState((prev) => {
        return {
          ...prev,
          number: 0,
          cost: 0,
          size: 0,
        };
      });
      return;
    }

    setSelectState((prev) => {
      return {
        ...prev,
        number: id,
        cost: upgradeObject.options.find((cost) => cost.number === id)!.cost,
        size: upgradeObject.options.find((size) => size.number === id)!.size,
      };
    });
  };

  useEffect(() => {
    setSlotState((prev) => {
      const findUpgrade = prev.selected_unit!.upgrade_options.map((option) => {
        if (option.name === selectState.name) {
          return selectState;
        }
        return option;
      });
      return {
        ...prev,
        selected_unit: { ...prev.selected_unit!, upgrade_options: findUpgrade },
      };
    });
  }, [selectState]);

  return (
    <div className="flex flex-wrap">
      <select
        value={upgradeOption.number}
        onChange={(e) => {
          handleSelect(Number(e.target.value));
        }}
      >
        <option value="0">{upgradeOption.name}</option>
        {upgradeObject.options.map((upgrade, index) => (
          <option
            key={keyId + "upgrade" + upgradeOption.name + index}
            value={upgrade.number}
          >
            {upgrade.number} {upgradeOption.name}: {upgrade.cost}pts
          </option>
        ))}
      </select>
    </div>
  );
};

export default BuilderUnitUpgradeSelect;
