import type { ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export interface FormValue {
  m: number | string;
  n: number | string;
}

export interface BoxProps {
  width: number;
  height: number;
  minWidth?: number;
}
export interface ButtonType {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}
export interface InputType extends BoxProps {
  className?: string;
  type: React.HTMLInputTypeAttribute;
  id?: string;
  register?: UseFormRegisterReturn;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | readonly string[] | undefined;
}

export interface LabelErrorsInput extends InputType {
  label: string;
  errors: string | undefined;
}

export interface MatrixType {
  m: number | undefined;
  n: number | undefined;
}

export interface MatrixTableType extends MatrixType {
  sortHandler: (val: string[][]) => void;
  matrixErrors: MatrixError[] | undefined;
}

export interface MatrixResultType extends MatrixType {
  matrix: string[][];
}

export type MatrixError = {
  row: number;
  col: number;
  message: string;
};

export type SortValidationResult = {
  errors?: MatrixError[];
};
