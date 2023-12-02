import React from "react";

const FrontpageUpdates = () => {
  return (
    <div className="w-full border">
      <h2 className="text-xl text-center border-b py-2 font-graduate">
        UPDATES:
      </h2>
      <div className="text-base max-h-96 overflow-y-scroll p-2">
        <ul className="flex flex-col gap-2">
          <li>
            <ul className="list-disc text-cyan-700">
              02/12/2023:
              <li className="ml-4 text-stone-50">
                Removing the print cards feature as I might be going a too far.
              </li>
            </ul>
          </li>
          <li>
            <ul className="list-disc text-cyan-700">
              30/11/2023:
              <li className="ml-4 text-stone-50">
                Bit of styling on the /build page
              </li>
              <li className="ml-4 text-stone-50">
                For convenience I've added a direct link to the print page in
                the Lists tab if you don't want to go through the builder.
              </li>
              <li className="ml-4 text-stone-50">
                Added print cards button on /print page
              </li>
            </ul>
          </li>
          <ul className="list-disc text-cyan-700">
            29/11/2023:
            <li className="ml-4 text-stone-50">
              Added accounts and a database for list storage
            </li>
          </ul>
          <ul className="list-disc text-cyan-700">
            28/11/2023:
            <li className="ml-4 text-stone-50">
              On request I've added the Quick Start Guide Legion Astranii Class
              Augumented Spearhead formation.
            </li>
          </ul>
          <ul className="list-disc text-cyan-700">
            27/11/2023:
            <li className="ml-4 text-stone-50">
              Fixes here and there, huge thanks to everyone who helped and
              messaged me! Added some warnings/reminders when buildings lists
              and a minimize formation button for easier viewing/use.
            </li>
          </ul>
          <ul className="list-disc text-cyan-700">
            26/11/2023:
            <li className="ml-4 text-stone-50">
              For fun I've added in titan weapon options if they're a single
              unit titan (so not the warhounds). Doesn't add much unless you
              like to see your titan weapons on the print page :D
            </li>
          </ul>
          <ul className="list-disc text-cyan-700">
            25/11/2023:
            <li className="ml-4 text-stone-50">
              A few fixes. Also updated the builder to highlight detachments &
              upgrades if one has been selected. Hope this makes it easier to
              view and use.
            </li>
          </ul>
          <ul className="list-disc text-cyan-700">
            24/11/2023:
            <li className="ml-4 text-stone-50">
              Oops! Added in Cerastus Knights!
            </li>
          </ul>
          <ul className="list-disc text-cyan-700">
            23/11/2023:
            <li className="ml-4 text-stone-50">
              Added a couple widgets and navigation links to make using the
              builder easier for mobiles. Changed the style so hopefully it's
              easier for mobile users.
            </li>
          </ul>
          <ul className="list-disc text-cyan-700">
            23/11/2023:
            <li className="ml-4 text-stone-50">
              Added a couple widgets and navigation links to make using the
              builder easier for mobiles. Changed the style so hopefully it's
              easier for mobile users.
            </li>
          </ul>
          <ul className="list-disc text-cyan-700">
            23/11/2023:
            <li className="ml-4 text-stone-50">
              Hopefully fixed the issue with changing detachments & uprades
              without breaking anything else. Added a contact link above.
            </li>
          </ul>
          <ul className="list-disc text-cyan-700">
            22/11/2023:
            <li className="ml-4 text-stone-50">
              {" "}
              Added Solar Auxilia and Titans
            </li>
          </ul>
          <ul className="list-disc text-cyan-700">
            21/11/2023:
            <li className="ml-4 text-stone-50">
              Added Knights, Warhound Titan & Legiones Astartes.
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default FrontpageUpdates;
