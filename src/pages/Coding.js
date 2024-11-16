import React, { useState } from 'react';
import CodeMirrorEditor from '../components/CodeMirror';
import { runCode } from '../services/apiUsage';

function Coding() {
  const [currentCode, setCurrentCode] = useState('# Write your code here...');
  const [output, setOutput] = useState('');
  const [evaluation, setEvaluation] = useState('');
  const [languageId, setLanguageId] = useState(71); // Default Python
  const [showSolution, setShowSolution] = useState(false);

  const solution = "print('Hello World')";
  const expectedOutput = "Hello World";

  const handleRunCode = async () => {
    setOutput('');
    setEvaluation('');

    const result = await runCode(currentCode, languageId);
    const codeOutput = result.stdout?.trim() || result.stderr?.trim() || 'No output';

    setOutput(codeOutput);

    if (codeOutput === expectedOutput) {
      setEvaluation('✅ Correct Solution!');
    } else {
      setEvaluation(`❌ Incorrect Solution. Expected: "${expectedOutput}"`);
    }
  };

  const handleShowSolution = () => {
    setCurrentCode(solution);
    setShowSolution(true);
  };

  return (
    <div className="coding-page">
      <h1>Coding Assignments</h1>

      <div className="select-container">
        <label>Select Language:</label>
        <select
          value={languageId}
          onChange={(e) => setLanguageId(parseInt(e.target.value))}
        >
          <option value="71">Python</option>
          <option value="63">JavaScript</option>
          <option value="62">Java</option>
        </select>
      </div>

      <div className="editor-container">
        <CodeMirrorEditor
          value={currentCode}
          onChange={setCurrentCode}
          currentLanguage={languageId === 71 ? 'python' : 'javascript'}
        />
      </div>

      <div className="button-container">
        <button className="btn btn-primary" onClick={handleRunCode}>
          Run Code
        </button>
        <button className="btn btn-secondary" onClick={handleShowSolution}>
          Show Solution
        </button>
      </div>

      <div className="output-container">
        <h3>Output:</h3>
        <pre>{output}</pre>
        <h4>{evaluation}</h4>
      </div>
    </div>
  );
}

export default Coding;
