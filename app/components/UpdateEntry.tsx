import React from "react";

interface properties {
  date: string;
  updates: string[];
}

const UpdateEntry = ({ date, updates }: properties) => {
  return (
    <li>
      <ul className="list-disc text-tertiary-700">
        {date}:
        {updates.map((update, index) => (
          <li key={date + index} className="ml-4 text-stone-50">
            {update}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default UpdateEntry;
