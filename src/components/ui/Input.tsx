import React from "react";
import type { InputType } from "../../utils/types";

const Input: React.FC<InputType> = ({ type, id, register, onChange, value, className, onKeyDown }) => {
  return (
    <div className={`input-container `}>
      <input
        className={`${className ? className : ""}`}
        dir="ltr"
        value={value}
        {...(id ? { id: id } : {})}
        type={type}
        {...(register ? register : {})}
        onChange={(e) => onChange?.(e)}
        onKeyDown={(e) => onKeyDown?.(e)}
      />
    </div>
  );
};

export default Input;
