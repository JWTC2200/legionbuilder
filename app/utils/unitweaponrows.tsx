import { weaponData } from "../data/weapon_data";
import { UNIT_DATASHEET } from "../types";
import TraitBox from "../components/Traitbox";

export const getUnitWeaponRows = (unit: number[]) => {
  return unit.map((weapon) => {
    const weaponEntry = weaponData.find((entry) => entry.id === weapon);
    if (weaponEntry) {
      return (
        <tr
          className="even:bg-stone-300 odd:bg-stone-100"
          key={weaponEntry.name}
        >
          <td className="px-2">
            {weaponEntry.profiles.length > 1 ? (
              <p>{weaponEntry.name}</p>
            ) : (
              <p>{weaponEntry.name}</p>
            )}
          </td>
          <td className="text-center">
            {weaponEntry.profiles.map((profile, index) => (
              <p key={weaponEntry.name + "range" + index}>
                {profile.range ? profile.range : "-"}
              </p>
            ))}
          </td>
          <td className="text-center">
            {weaponEntry.profiles.map((profile, index) => (
              <p key={weaponEntry.name + "dice" + index}>
                {profile.dice ? profile.dice : "-"}
              </p>
            ))}
          </td>
          <td className="text-center">
            {weaponEntry.profiles.map((profile, index) => (
              <p key={weaponEntry.name + "tohit" + index}>
                {profile.to_hit ? profile.to_hit + "+" : "-"}
              </p>
            ))}
          </td>
          <td className="text-center">
            {weaponEntry.profiles.map((profile, index) => (
              <p key={weaponEntry.name + "ap" + index}>
                {profile.ap ? "-" : null}
                {profile.ap}
              </p>
            ))}
          </td>
          <td className="px-2">
            {weaponEntry.profiles.map((profile, index) => (
              <div
                key={weaponEntry.name + "traits" + index}
                className="flex flex-wrap gap-1"
              >
                {profile.traits.length ? (
                  profile.traits.map((trait, index) => (
                    <div
                      key={weaponEntry.name + "traits" + index}
                      className="flex"
                    >
                      <TraitBox trait={trait} />
                      {index < profile.traits.length - 1 ? "," : "."}
                    </div>
                  ))
                ) : (
                  <br />
                )}
              </div>
            ))}
          </td>
        </tr>
      );
    }
    return null;
  });
};
