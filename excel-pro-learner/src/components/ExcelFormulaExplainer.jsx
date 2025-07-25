import React from "react";

const formulas = [
  {
    formula: "=SUM(A1:A10)",
    explanation: "Adds all numbers in cells A1 to A10.",
  },
  {
    formula: "=VLOOKUP(101, A2:C10, 2, FALSE)",
    explanation: "Searches for 101 in column A and returns the value from column B.",
  },
  {
    formula: "=REGEXMATCH(A1, \"\\d{3}-\\d{2}-\\d{4}\")",
    explanation: "Checks if cell A1 contains a Social Security number format.",
  },
];

function ExcelFormulaExplainer() {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-2">📐 Excel Formula Explainer</h2>
      <ul className="space-y-4">
        {formulas.map((f, idx) => (
          <li key={idx} className="bg-gray-100 p-4 rounded text-black">
            <strong>{f.formula}</strong>
            <div>{f.explanation}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExcelFormulaExplainer;
