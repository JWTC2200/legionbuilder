import React from "react";
import { returnToTop } from "../utils/scrolltotop";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ToTopOfPageWidget = () => {
  return (
    <button
      onClick={returnToTop}
      className="fixed bg-stone-900 w-full bottom-0 py-2 flex justify-center left-0 border-t border-lime-600"
    >
      <MdKeyboardDoubleArrowUp className="text-4xl" />
    </button>
  );
};

export default ToTopOfPageWidget;
