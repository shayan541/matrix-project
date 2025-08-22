import { useState } from "react";
import MatrixForm from "../components/matrixForm/MatrixForm";
import type { FormValue, MatrixError } from "../utils/types";
import { handleSort, handleValidation } from "../utils/functions";
import Matrix from "../components/matrixTable/Matrix";

const MatrixPage = () => {
  const [dims, setDims] = useState<FormValue | null>(null);
  const [sortedMatrix, setSortedMatrix] = useState<string[][] | null>(null);
  const [matrixErrors, setMatrixErrors] = useState<MatrixError[]>();

  return (
    <div className="container">
      <div className="matrix-parent">
        <h1>سازنده ماتریس سورت شده</h1>
        <MatrixForm
          onSubmit={(val) => {
            setMatrixErrors(undefined);
            setDims(val);
            setSortedMatrix(null);
          }}
        />
        {dims && (
          <div>
            <Matrix
              matrix={sortedMatrix}
              m={Number(dims?.m)}
              n={Number(dims?.n)}
              onProcess={(matrix) => {
                const errors = handleValidation(matrix);
                setMatrixErrors(errors);
                if (errors === undefined) setSortedMatrix(handleSort(matrix));
              }}
              matrixErrors={matrixErrors}
            />
          </div>
        )}

        {matrixErrors !== undefined && <p className="text-error err-msg mt-10">اعداد به درستی وارد نشدن</p>}
      </div>
    </div>
  );
};

export default MatrixPage;
