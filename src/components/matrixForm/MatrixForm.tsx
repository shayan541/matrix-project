import React from "react";
import { useForm } from "react-hook-form";
import type { FormValue } from "../../utils/types";
import InputAndErrors from "./InputAndErrors";
import Button from "../ui/Button";

const MatrixForm: React.FC<{ onSubmit: (value: FormValue) => void }> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();
  const submitHandler = (data: FormValue) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="matrix-table-wrapper">
        <InputAndErrors
          errors={errors.m?.message}
          height={40}
          label=" :ردیف ها (m)"
          type="number"
          width={400}
          dir="ltr"
          id="m-input"
          register={register("m", {
            required: { value: true, message: "این فیلد اجباری است" },
            min: { value: 4, message: "عدد باید بزرگتر از 3 باشد" },
            validate: (value) => value % 2 === 1 || "عدد باید فرد باشد",
          })}
        />

        <InputAndErrors
          errors={errors.n?.message}
          height={40}
          label=" :ستون ها (n)"
          type="number"
          width={400}
          dir="ltr"
          id="n-input"
          register={register("n", {
            required: { value: true, message: "این فیلد اجباری است" },
            min: { value: 4, message: "عدد باید بزرگتر از 3 باشد" },
            validate: (value) => value % 2 === 1 || "عدد باید فرد باشد",
          })}
        />
      </div>

      <div className="matrix-table-wrapper">
        <Button type="submit" width={400} height={60}>
          ساخت جدول
        </Button>
      </div>
    </form>
  );
};

export default MatrixForm;
