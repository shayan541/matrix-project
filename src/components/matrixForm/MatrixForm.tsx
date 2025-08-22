import React from "react";
import { Controller, useForm } from "react-hook-form";
import type { FormValue } from "../../utils/types";
import InputAndErrors from "./InputAndErrors";
import Button from "../ui/Button";
import { englishNumber, toPersianNumber } from "../../utils/functions";

const MatrixForm: React.FC<{ onSubmit: (value: FormValue) => void }> = ({ onSubmit }) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValue>();
  const submitHandler = (data: FormValue) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="form-wrapper mt-25 ">
        <div className="flex-wrap">
          <Controller
            name="m"
            control={control}
            rules={{
              required: "این فیلد اجباری است",
              min: { value: 4, message: "عدد باید بزرگتر از 3 باشد" },
              validate: (value) => Number(value) % 2 === 1 || "عدد باید فرد باشد",
            }}
            render={({ field }) => (
              <InputAndErrors
                errors={errors.m?.message}
                label="سطر ها (m):"
                type="text"
                id="m-input"
                value={toPersianNumber(field.value?.toString() || "")}
                onChange={(e) => field.onChange(englishNumber(e.target.value))}
                onKeyDown={(e) => {
                  if (
                    !/[0-9۰-۹]/.test(e.key) &&
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
            )}
          />
          <Controller
            name="n"
            control={control}
            rules={{
              required: "این فیلد اجباری است",
              min: { value: 4, message: "عدد باید بزرگتر از 3 باشد" },
              validate: (value) => Number(value) % 2 === 1 || "عدد باید فرد باشد",
            }}
            render={({ field }) => (
              <InputAndErrors
                errors={errors.n?.message}
                label=" ستون ها (n):"
                type="text"
                id="n-input"
                value={toPersianNumber(field.value?.toString() || "")}
                onChange={(e) => field.onChange(englishNumber(e.target.value))}
                onKeyDown={(e) => {
                  if (
                    !/[0-9۰-۹]/.test(e.key) &&
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
            )}
          />
        </div>
        <Button type="submit">ساخت جدول</Button>
      </div>
    </form>
  );
};

export default MatrixForm;
