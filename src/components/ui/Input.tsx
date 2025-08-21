import React from "react";
import type { InputType } from "../../utils/types";

const Input: React.FC<InputType> = ({ type, id, height, width, minWidth, dir, register, onChange, value }) => {
  return (
    <div
      className="input-container"
      style={{
        maxWidth: width ? `${width}px` : "auto",
        height: height ? `${height}px` : "auto",
        minWidth: minWidth ? `${minWidth}px` : "auto",
      }}
    >
      <input
        value={value}
        {...(id ? { id: id } : {})}
        type={type}
        style={{ fontSize: height ? `${height * 0.6}px` : "auto", width: "100%" }}
        {...(dir ? { dir: dir } : {})}
        {...(register ? register : {})}
        onChange={(e) => onChange?.(e)}
        onKeyDown={(e) => {
          if (
            type === "number" &&
            !/[0-9]/.test(e.key) &&
            e.key !== "Backspace" &&
            e.key !== "Delete" &&
            e.key !== "ArrowLeft" &&
            e.key !== "ArrowRight" &&
            e.key !== "Tab"
          ) {
            e.preventDefault();
          }
        }}
      />
    </div>
  );
};

export default Input;
