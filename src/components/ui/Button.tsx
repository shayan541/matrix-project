import React from "react";
import type { ButtonType } from "../../utils/types";

const Button: React.FC<ButtonType> = ({ children, type, width, height, onClick, calssName }) => {
  return (
    <div className={`button-container ${calssName}`} style={{ maxWidth: width, height: height }}>
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
