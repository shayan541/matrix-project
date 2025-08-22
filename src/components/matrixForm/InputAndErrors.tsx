import React from "react";
import type { LabelErrorsInput } from "../../utils/types";
import Input from "../ui/Input";

const InputAndErrors: React.FC<LabelErrorsInput> = ({ label, type, id, register, errors, value, onChange, className, onKeyDown }) => {
  return (
    <div className="input-label-container">
      <label htmlFor="m-input"> {label} </label>

      <Input
        className={className ? className : ""}
        type={type}
        id={id}
        {...(register ? register : {})}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />

      <p className="text-error">{errors}</p>
    </div>
  );
};

export default InputAndErrors;
