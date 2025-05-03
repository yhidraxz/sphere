import React, { useState } from "react";

interface props {
  text: string;
  condition: boolean;
  isActive: boolean;
  onClick: () => void;
}

export const NavTitle: React.FC<props> = (props) => {
  return (
    <h2
      className={`py-1 px-2 rounded-2xl select-none cursor-pointer
        ${
          props.isActive
            ? "text-white bg-blue-500"
            : "text-gray-300 hover:bg-onHoverColor"
        }`}
      onClick={props.onClick}
    >
      {props.text}
    </h2>
  );
};
