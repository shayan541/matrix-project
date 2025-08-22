import React, { useState, useEffect, useRef } from "react";
import * as ReactDOM from "react-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { englishNumber, toPersianNumber } from "../../utils/functions";

type MatrixCommonProps = {
  m: number | string;
  n: number | string;
  matrix: string[][] | null;
  onChange?: (values: string[][]) => void;
  onProcess?: (values: string[][]) => void;
  matrixErrors?: { row: number; col: number; message: string }[];
};

const Matrix: React.FC<MatrixCommonProps> = ({ m, n, matrix: initialMatrix, onChange, onProcess, matrixErrors }) => {
  const mNum = Math.max(0, Number(m) || 0);
  const nNum = Math.max(0, Number(n) || 0);

  const rows = Array.from({ length: mNum }, (_, i) => i);
  const cols = Array.from({ length: nNum }, (_, i) => i);

  const [values, setValues] = useState<string[][]>(initialMatrix || Array.from({ length: mNum }, () => Array(nNum).fill("")));
  const [itemHoveredIndex, setItemHoveredIndex] = useState<{ r: number; c: number } | undefined>();
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number } | null>(null);

  const tdRefs = useRef<HTMLTableCellElement[][]>([]);

  useEffect(() => {
    if (initialMatrix) {
      setValues(initialMatrix);
    } else {
      setValues(Array.from({ length: mNum }, () => Array(nNum).fill("")));
    }
  }, [initialMatrix, mNum, nNum]);

  const handleChange = (r: number, c: number, val: string) => {
    const newValues = [...values];
    newValues[r] = [...newValues[r]];
    newValues[r][c] = val;
    setValues(newValues);
    onChange?.(newValues);
  };

  return (
    <div className="matrix-form-wrapper mt-100">
      <div className="table-container">
        <table dir="ltr">
          <tbody>
            {rows.map((r) => (
              <tr key={r} className="matrix-row">
                {cols.map((c) => (
                  <td
                    ref={(el) => {
                      if (el) {
                        if (!tdRefs.current[r]) tdRefs.current[r] = [];
                        tdRefs.current[r][c] = el;
                      }
                    }}
                    onMouseEnter={() => {
                      const el = tdRefs.current[r][c];
                      if (el) {
                        const rect = el.getBoundingClientRect();
                        setTooltipPos({ top: rect.top + window.scrollY - 30, left: rect.left + window.scrollX });
                        setItemHoveredIndex({ r, c });
                      }
                    }}
                    onMouseLeave={() => {
                      setItemHoveredIndex(undefined);
                      setTooltipPos(null);
                    }}
                    key={c}
                    className="matrix-style"
                    onMouseOver={() => {
                      setItemHoveredIndex({ r, c });
                    }}
                    onMouseOut={() => {
                      setItemHoveredIndex(undefined);
                    }}
                  >
                    <Input
                      height={30}
                      type="text"
                      width={60}
                      minWidth={40}
                      value={toPersianNumber(values[r]?.[c] || "")}
                      onChange={(e) => {
                        const val = englishNumber(e.target.value);
                        if (val === "" || val === "-" || val === "0" || /^-?[1-9]\d*$/.test(val))
                          handleChange(r, c, englishNumber(e.target.value));
                      }}
                      className={matrixErrors?.some((err) => err.row === r && err.col === c) ? "input-error" : ""}
                    />

                    {itemHoveredIndex?.r === r &&
                      itemHoveredIndex?.c === c &&
                      matrixErrors?.find((err) => err.row === r && err.col === c)?.message !== undefined &&
                      tooltipPos &&
                      ReactDOM.createPortal(
                        <div
                          style={{
                            position: "absolute",
                            top: tooltipPos.top,
                            left: tooltipPos.left,
                            background: "black",
                            color: "white",
                            padding: "4px 8px",
                            borderRadius: "4px",
                          }}
                        >
                          {matrixErrors?.find((err) => err.row === r && err.col === c)?.message}
                        </div>,
                        document.getElementById("tooltip-root") as HTMLElement
                      )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {onProcess && <Button onClick={() => onProcess(values)}>پردازش جدول</Button>}
    </div>
  );
};

export default Matrix;
