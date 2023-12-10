import React from "react";
import UpdateEntry from "./UpdateEntry";
import { updateData } from "../data/updates";

const FrontpageUpdates = () => {
  return (
    <div className=" mx-4 border">
      <h2 className="text-xl text-center border-b py-2 font-graduate">
        UPDATES:
      </h2>
      <div className="text-base max-h-96 overflow-y-scroll p-2">
        <ul className="flex flex-col gap-2">
          {updateData.map((entry, index) => (
            <UpdateEntry key={"update" + index} {...entry} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FrontpageUpdates;
