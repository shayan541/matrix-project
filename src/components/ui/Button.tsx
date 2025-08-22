import React from "react";
import type { ButtonType } from "../../utils/types";

const Button: React.FC<ButtonType> = ({ children, type, onClick, className }) => {
  return (
    <div className={`button-container ${className ? className : ""}`}>
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
