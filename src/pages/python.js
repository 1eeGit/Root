import React, { useState } from 'react';
import flipCard from '../components/Card';
import pyLogo from './py_logo.png';
import CodeMirror from '../components/CodeMirror';
import { runCode } from '../services/apiUsage';

function Python() {
  const [currentCode, setCurrentCode] = useState('# Write your code here...');
  const [output, setOutput] = useState('');
  const [languageId, setLanguageId] = useState(71); // Default python

  const handleRunCode = async () => {
    const result = await runCode(currentCode, languageId);
    const codeOutput = result.stdout || result.stderr || 'No output';
    setOutput(codeOutput);
  };

  return (
    <div style={{ padding: '2em', textAlign: 'center' }}>
      <h1>Python Coding Assignments</h1>
      {flipCard("Question", "1", pyLogo, "Answer")}

      <div style={{ marginBottom: '1em' }}>
        <label>Select Language: </label>
        <select value={languageId} onChange={(e) => setLanguageId(parseInt(e.target.value))}>
          <option value="71">Python</option>
          <option value="63">JavaScript</option>
          <option value="62">Java</option>
        </select>
      </div>

      <div style={{ marginTop: '2em' }}>
        <CodeMirror
          currentCode={currentCode}
          setCurrentCode={setCurrentCode}
          currentLanguage="python"
        />
      </div>

      <button className="btn btn-primary mt-3" onClick={handleRunCode}>
        Run Code
      </button>

      <div className="output-container" style={{ marginTop: '2em' }}>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default Python;
