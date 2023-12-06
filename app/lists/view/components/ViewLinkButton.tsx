"use client";

import React from "react";
import { addToClipboard } from "../../utils";
import { FaCopy } from "@react-icons/all-files/fa/FaCopy";

interface properties {
  className?: string;
  children: React.ReactNode;
}

const ViewLinkButton = ({ className, children }: properties) => {
  return (
    <button
      type="button"
      onClick={() => addToClipboard(window.location.href)}
      className={className}
    >
      <FaCopy /> {children}
    </button>
  );
};

export default ViewLinkButton;
