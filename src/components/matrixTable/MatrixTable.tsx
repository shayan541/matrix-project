import React, { useState, useEffect } from "react";
import type { MatrixTableType } from "../../utils/types";
import Button from "../ui/Button";
import Input from "../ui/Input";

const MatrixTable: React.FC<MatrixTableType> = ({ m, n, sortHandler, matrixErrors }) => {
  const mNum = Math.max(0, Number(m) || 0);
  const nNum = Math.max(0, Number(n) || 0);

  const rows = Array.from({ length: mNum }, (_, i) => i);
  const cols = Array.from({ length: nNum }, (_, i) => i);

  const [values, setValues] = useState<string[][]>([]);

  useEffect(() => {
    setValues(Array.from({ length: mNum }, () => Array(nNum).fill("")));
  }, [mNum, nNum]);

  const handleChange = (r: number, c: number, val: string) => {
    setValues((prev) => {
      const newValues = [...prev];
      newValues[r] = [...newValues[r]];
      newValues[r][c] = val;
      return newValues;
    });
  };

  return (
    <div className="matrix-table-wrapper">
      <div className="table-container">
        <table>
          <tbody>
            {rows.map((r) => (
              <tr key={r} className="matrix-row">
                {cols.map((c) => (
                  <td key={c} className="matrix-style" style={{ position: "relative" }}>
                    <Input
                      height={18}
                      type="number"
                      width={40}
                      onChange={(e) => handleChange(r, c, e.target.value)}
                      value={values[r]?.[c] || ""}
                      minWidth={40}
                    />
                    {matrixErrors?.some((err) => err.row === r && err.col === c) && (
                      <div className="item-err" title={matrixErrors.find((err) => err.row === r && err.col === c)?.message} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Button width={400} height={60} onClick={() => sortHandler(values)} calssName="mt-10">
        پردازش جدول
      </Button>
    </div>
  );
};

export default MatrixTable;
