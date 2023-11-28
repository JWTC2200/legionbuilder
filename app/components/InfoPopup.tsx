"use client";

import React from "react";
import { IoClose } from "react-icons/io5";

const InfoPopup = ({
  toggle,
}: {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed border-2 border-black bg-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-stone-900 text-sm sm:text-lg font-semibold p-2 rounded-lg w-10/12 max-w-sm dataslate_background">
      <div className="text-2xl flex justify-end w-full">
        <button onClick={() => toggle((prev) => !prev)}>
          <IoClose />
        </button>
      </div>
      <p>
        Sorry about this but on Nov 29 around 10:00am CEST I'll be pushing an
        update that is going to break everyones lists or at least how its
        currently stored on your device local storage.
      </p>
      <p className="mt-2">
        After being reminded of the quick start formation and its mixed faction
        detachments I'd rather make the change now when theres less to break if
        GW makes more of them in the future.
      </p>
      <p className="mt-2">
        You'll still be able to print your lists correctly but not change any
        detachments on the build page. So you will have to clear it and start
        again.
      </p>
    </div>
  );
};

export default InfoPopup;
