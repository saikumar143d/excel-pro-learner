import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function MonacoEditorComponent({ language = "javascript", height = "400px", defaultValue = "// Write your script here" }) {
  const [code, setCode] = useState(defaultValue);

  return (
    <div className="my-4">
      <Editor
        height={height}
        language={language}
        defaultValue={defaultValue}
        theme="vs-dark"
        onChange={(value) => setCode(value)}
      />
    </div>
  );
}

export default MonacoEditorComponent;
