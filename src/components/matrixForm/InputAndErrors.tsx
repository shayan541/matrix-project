import React from "react";
import type { LabelErrorsInput } from "../../utils/types";
import Input from "../ui/Input";

const InputAndErrors: React.FC<LabelErrorsInput> = ({ height, label, type, width, id, register, errors, value, onChange }) => {
  return (
    <div className="input-label-container">
      <label htmlFor="m-input"> {label} </label>
      <div style={{ maxWidth: width ? `${width}px` : "auto", }}>
        <Input height={height} width={width} type={type} id={id} {...(register ? register : {})} value={value} onChange={onChange} />
        <p className="text-error" >
          {errors}
        </p>
      </div>
    </div>
  );
};

export default InputAndErrors;
