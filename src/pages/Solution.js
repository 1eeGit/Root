import React, { useState } from 'react';
import CodeMirrorEditor from '../components/CodeMirror';
import { runCode } from '../services/apiUsage';
import assignments from '../data/assignments';
import './Assignments.css';
import { useParams } from 'react-router-dom';

function Solution() {
  const { assignmentId } = useParams();
  const assignment = assignments.find((a) => a.id === assignmentId);

  const [code, setCode] = useState('# Write your code here...');
  const [output, setOutput] = useState('');
  const [evaluation, setEvaluation] = useState('');
  const [loading, setLoading] = useState(false);

  if (!assignment) {
    return <h2>Assignment not found</h2>;
  }

  const handleRunCode = async () => {
    setLoading(true);
    setOutput('');
    setEvaluation('');
  
    console.log("Running code:", code);
    console.log("Assignment language ID:", assignment.languageId);
  
    try {
      const result = await runCode(code, assignment.languageId);
  
      const codeOutput = result.stdout?.trim() || result.stderr?.trim() || 'No output';

  
      setOutput(codeOutput);
  
      const expectedOutput = assignment.expected_output.trim();
      if (result.stderr) {
        setEvaluation('❌ Execution error');
      } else if (codeOutput === expectedOutput) {
        setEvaluation('✅ Correct Solution!');
      } else {
        setEvaluation(`❌ Incorrect Solution. Expected: "${expectedOutput}"`);
      }
    } catch (error) {
      console.error("Error during code execution:", error);
      setOutput('Error running code');
      setEvaluation('❌ Execution error');
    }
  
    setLoading(false);
  };

  const handleShowSolution = () => {
    setCode(assignment.solution);
  };

  return (
    <div className="coding-container">
      <h1>{assignment.title}: {assignment.description}</h1>
      
      <div className="editor-output-container">
        <div className="input-box">
          <h3>Code Editor</h3>
          <CodeMirrorEditor value={code} onChange={setCode} language="python" />

          <div className="button-container">
            <button className="btn btn-primary" onClick={handleRunCode} disabled={loading}>
              {loading ? 'Running...' : 'Run Code'}
            </button>
            <button className="btn btn-secondary" onClick={handleShowSolution}>
              Show Solution
            </button>
          </div>
        </div>

        <div className="output-box">
          <h3>Output</h3>
          <pre>{output}</pre>
          <h4>{evaluation}</h4>
        </div>
      </div>
    </div>
  );
}

export default Solution;
