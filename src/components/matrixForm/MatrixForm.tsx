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
      <div className="matrix-form-wrapper mt-25">
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
              height={40}
              label="سطر ها (m):"
              type="text"
              width={200}
              id="m-input"
              value={toPersianNumber(field.value?.toString() || "")}
              onChange={(e) => field.onChange(englishNumber(e.target.value))}
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
              height={40}
              label=" ستون ها (n):"
              type="text"
              width={200}
              id="n-input"
              value={toPersianNumber(field.value?.toString() || "")}
              onChange={(e) => field.onChange(englishNumber(e.target.value))}
            />
          )}
        />
        <Button type="submit">ساخت جدول</Button>
      </div>
    </form>
  );
};

export default MatrixForm;
