import React from "react";
import { returnToTop } from "../utils/scrolltotop";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ToTopOfPageWidget = () => {
  return (
    <button
      onClick={returnToTop}
      className="fixed bg-secondary-900 max-w-screen-lg w-full bottom-0 py-2 flex justify-center border-t border-primary-600"
    >
      <MdKeyboardDoubleArrowUp className="text-4xl" />
    </button>
  );
};

export default ToTopOfPageWidget;
