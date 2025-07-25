import React, { useState } from "react";

function JsonFormatter() {
  const [input, setInput] = useState("");
  const [formatted, setFormatted] = useState("");

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(input);
      setFormatted(JSON.stringify(parsed, null, 2));
    } catch (err) {
      setFormatted("Invalid JSON");
    }
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-2">🧾 JSON Formatter</h2>
      <textarea
        className="w-full p-2 border rounded mb-2 text-black"
        rows={6}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste JSON here..."
      />
      <button onClick={handleFormat} className="bg-blue-500 text-white px-4 py-2 rounded">
        Format
      </button>
      <pre className="bg-gray-100 p-4 mt-4 rounded text-black overflow-auto whitespace-pre-wrap">
        {formatted}
      </pre>
    </div>
  );
}

export default JsonFormatter;
