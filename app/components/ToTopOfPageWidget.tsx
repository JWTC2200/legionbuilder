import React from "react";
import { returnToTop } from "../utils/scrolltotop";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ToTopOfPageWidget = () => {
  return (
    <button
      onClick={returnToTop}
      className="fixed bg-stone-800 max-w-4xl w-full bottom-0 py-2 flex justify-center border-t border-lime-600"
    >
      <MdKeyboardDoubleArrowUp className="text-4xl" />
    </button>
  );
};

export default ToTopOfPageWidget;
