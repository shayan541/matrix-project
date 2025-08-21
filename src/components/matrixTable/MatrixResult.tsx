import React from "react";
import type { MatrixResultType } from "../../utils/types";

const MatrixResult: React.FC<MatrixResultType> = ({ matrix, m, n }) => {
  const mNum = Math.max(0, Number(m) || 0);
  const nNum = Math.max(0, Number(n) || 0);

  const rows = Array.from({ length: mNum }, (_, i) => i);
  const cols = Array.from({ length: nNum }, (_, i) => i);
  return (
    <div className="matrix-table-wrapper">
      <div className="table-container">
        <table>
          <tbody>
            {rows.map((r) => (
              <tr key={r} className="matrix-row">
                {cols.map((c) => (
                  <td className="matrix-style" key={c} style={{ height: "18px", width: "40px" }}>
                    {matrix?.[r]?.[c] ?? ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatrixResult;
