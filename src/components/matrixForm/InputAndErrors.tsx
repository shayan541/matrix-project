import React from "react";
import type { LabelErrorsInput } from "../../utils/types";
import Input from "../ui/Input";

const InputAndErrors: React.FC<LabelErrorsInput> = ({ height, label, type, width, dir, id, register, errors ,value}) => {
  return (
    <div className="input-label-container  w-full">
      <div>
        <label htmlFor="m-input"> {label} </label>
      </div>
      <div style={{ maxWidth: width ? `${width}px` : "auto", width: "100%" }}>
        <Input height={height} width={width} dir={dir} type={type} id={id} register={register} value={value}/>
        <p> {errors}</p>
      </div>
    </div>
  );
};

export default InputAndErrors;
