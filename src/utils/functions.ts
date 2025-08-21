import type { MatrixError } from "./types";

export const toPersianNumber = (num: string) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num.replace(/\d/g, (d) => persianDigits[parseInt(d)]);
};

export const handleSort = (matrix: string[][] | null): string[][] | null => {
  if (!matrix) return null;

  const sortedMatrix = matrix.map((row, index) => {
    const sortedRow = [...row].sort((a, b) => Number(a) - Number(b));
    return index % 2 === 0 ? sortedRow : sortedRow.reverse();
  });

  return sortedMatrix;
};

export const validateMatrix = (matrix: string[][]): MatrixError[] => {
  const errors: MatrixError[] = [];

  matrix.forEach((row, rIdx) => {
    row.forEach((val, cIdx) => {
      if (val.trim() === "") {
        errors.push({ row: rIdx, col: cIdx, message: "فیلد خالی است" });
      } else if (!/^-?\d+$/.test(val.trim())) {
        errors.push({ row: rIdx, col: cIdx, message: "عدد صحیح نیست" });
      }
    });
  });

  return errors;
};

export const handleValidation = (matrix: string[][]): MatrixError[] | undefined => {
  const errors = validateMatrix(matrix);
  if (errors.length > 0) return errors;
  return undefined;
};
