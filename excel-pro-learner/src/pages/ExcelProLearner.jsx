import React from "react";
import SpreadsheetSimulator from "../components/SpreadsheetSimulator";
import MonacoEditorComponent from "../components/MonacoEditorComponent";
import JsonFormatter from "../components/JsonFormatter";
import ExcelFormulaExplainer from "../components/ExcelFormulaExplainer";
import QuizSection from "../components/QuizSection";

function ExcelProLearner() {
  return (
    <div className="p-6 max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Excel Pro Learner
      </h1>
      <p className="text-center mb-8 text-lg">
        Welcome! This platform teaches Excel, Google Sheets, VBA, and more.
      </p>

      {/* Excel-like Table */}
      <SpreadsheetSimulator />

      {/* Code Editor */}
      <MonacoEditorComponent />

      {/* Excel Formula Explainer */}
      <ExcelFormulaExplainer />

      {/* JSON Formatter */}
      <JsonFormatter />

      {/* Quiz Section */}
      <QuizSection />
    </div>
  );
}

export default ExcelProLearner;
