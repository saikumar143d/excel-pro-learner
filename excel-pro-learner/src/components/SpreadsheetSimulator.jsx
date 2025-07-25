import React, { useState } from "react";
import Spreadsheet from "react-spreadsheet";

function SpreadsheetSimulator() {
  const [data, setData] = useState([
    [{ value: "Name" }, { value: "Score" }],
    [{ value: "Sai" }, { value: "90" }],
    [{ value: "John" }, { value: "85" }],
    [{ value: "Ava" }, { value: "88" }],
  ]);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">📊 Spreadsheet Simulator</h2>
      <Spreadsheet data={data} onChange={setData} />
    </div>
  );
}

export default SpreadsheetSimulator;
