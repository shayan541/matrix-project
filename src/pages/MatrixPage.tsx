import { useState } from "react";
import MatrixForm from "../components/matrixForm/MatrixForm";
import MatrixResult from "../components/matrixTable/MatrixResult";
import MatrixTable from "../components/matrixTable/MatrixTable";
import type { FormValue, MatrixError } from "../utils/types";
import { handleSort, handleValidation } from "../utils/functions";

const MatrixPage = () => {
  const [dims, setDims] = useState<FormValue | null>(null);
  const [sortedMatrix, setSortedMatrix] = useState<string[][] | null>(null);
  const [matrixErrors, setMatrixErrors] = useState<MatrixError[]>();
  return (
    <div className="container">
      <div className="matrix-parent">
        <h1>سازنده ماتریس سورت شده</h1>
        <MatrixForm onSubmit={(val) => setDims(val)} />
        {dims && (
          <div>
            <MatrixTable
              m={dims?.m}
              n={dims?.n}
              sortHandler={(matrix) => {
                const errors = handleValidation(matrix);
                setMatrixErrors(errors);
                setSortedMatrix(handleSort(matrix));
              }}
              matrixErrors={matrixErrors}
            />
          </div>
        )}
        {sortedMatrix && matrixErrors === undefined && <MatrixResult m={dims?.m} n={dims?.n} matrix={sortedMatrix} />}
        {matrixErrors !== undefined && <div className="matrix-table-wrapper align-center">اعداد به درستی وارد نشدن</div>}
      </div>
    </div>
  );
};

export default MatrixPage;
