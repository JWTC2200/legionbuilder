import {
  GiWhiteTower,
  GiHeavyBullets,
  GiPirateCannon,
  GiJetFighter,
  GiBattleTank,
  GiCog,
  GiCrackedHelm,
  GiGothicCross,
  GiTankTread,
  GiCrackedShield,
  GiApc,
} from "react-icons/gi";
import { IoSkullSharp } from "react-icons/io5";
import { PiArrowFatUpFill } from "react-icons/pi";
import { DETACHMENT_TYPE } from "../types";

export const getDetachmentIcons = (type: DETACHMENT_TYPE) => {
  if (type === DETACHMENT_TYPE.hq) {
    return <IoSkullSharp />;
  }
  if (type === DETACHMENT_TYPE.core) {
    return <GiCrackedShield />;
  }

  if (type === DETACHMENT_TYPE.support) {
    return <GiHeavyBullets />;
  }
  if (type === DETACHMENT_TYPE.vanguard) {
    return <GiGothicCross />;
  }
  if (type === DETACHMENT_TYPE.light) {
    return <GiApc />;
  }
  if (type === DETACHMENT_TYPE.battle) {
    return <GiBattleTank />;
  }
  if (type === DETACHMENT_TYPE.heavy) {
    return <GiTankTread />;
  }
  if (type === DETACHMENT_TYPE.artillery) {
    return <GiPirateCannon />;
  }
  if (type === DETACHMENT_TYPE.air) {
    return <GiJetFighter />;
  }
  if (type === DETACHMENT_TYPE.bastion) {
    return <GiWhiteTower />;
  }
  if (
    type === DETACHMENT_TYPE.transport ||
    type === DETACHMENT_TYPE.dedicated
  ) {
    return <PiArrowFatUpFill />;
  }
  if (type === DETACHMENT_TYPE.knight) {
    return <GiCrackedHelm />;
  }
  if (type === DETACHMENT_TYPE.titan) {
    return <GiCog />;
  }

  return null;
};
