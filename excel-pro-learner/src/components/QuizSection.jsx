import React, { useState } from "react";

const questions = [
  {
    question: "What does the SUM function do?",
    options: ["Adds numbers", "Sorts data", "Finds max", "Multiplies"],
    answer: "Adds numbers",
  },
  {
    question: "What does VLOOKUP return?",
    options: ["Row number", "Column letter", "Cell color", "Matched value"],
    answer: "Matched value",
  },
];

function QuizSection() {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(Array(questions.length).fill(null));

  const handleSelect = (qIdx, option) => {
    const updated = [...selected];
    updated[qIdx] = option;
    setSelected(updated);

    if (questions[qIdx].answer === option) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-2">🎯 Quiz Yourself</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-4 p-4 bg-gray-100 rounded text-black">
          <div className="font-bold mb-2">{q.question}</div>
          {q.options.map((opt, j) => (
            <button
              key={j}
              onClick={() => handleSelect(i, opt)}
              className={`mr-2 mb-2 px-4 py-2 rounded ${
                selected[i] === opt
                  ? opt === q.answer
                    ? "bg-green-400 text-white"
                    : "bg-red-400 text-white"
                  : "bg-blue-100"
              }`}
              disabled={selected[i] !== null}
            >
              {opt}
            </button>
          ))}
        </div>
      ))}
      <div className="mt-4 font-semibold">Your Score: {score}</div>
    </div>
  );
}

export default QuizSection;
