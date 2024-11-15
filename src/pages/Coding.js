import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CodeMirrorEditor from '../components/CodeMirror';
import { runCode } from '../services/apiUsage';
import assignments from '../data/assignments';
import './Assignments.css';

function Coding() {
  const { assignmentId } = useParams();
  const assignment = assignments.find((a) => a.id === assignmentId);

  const [code, setCode] = useState(assignment ? assignment.solution : '');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  if (!assignment) {
    return <h2>Assignment not found</h2>;
  }

  const handleRunCode = async () => {
    setLoading(true);
    setOutput('');

    const result = await runCode(code, assignment.languageId);
    const expectedOutput = assignment.expected_output.trim();

    if (result.stdout?.trim() === expectedOutput) {
      setOutput('Correct Solution!');
    } else if (result.stderr) {
      setOutput(`Error: ${result.stderr}`);
    } else {
      setOutput(`Incorrect Output: Expected "${expectedOutput}", but got "${result.stdout?.trim()}"`);
    }

    setLoading(false);
  };

  return (
    <div className="coding-container">
      <h1>{assignment.title}</h1>
      <div className="editor-output-container">
        <div className="input-box">
          <h3>Code Editor</h3>
          <CodeMirrorEditor value={code} onChange={setCode} language="python" />
          <button onClick={handleRunCode} disabled={loading}>
            {loading ? 'Running...' : 'Run Code'}
          </button>
        </div>
        <div className="output-box">
          <h3>Output</h3>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
}

export default Coding;
