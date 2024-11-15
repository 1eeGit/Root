import React, { useState, useEffect, useRef } from 'react';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { lineNumbers } from '@codemirror/gutter';
import { highlightActiveLine, highlightActiveLineGutter } from '@codemirror/view';
import { fetchDataFromAPI } from '../services/apiUsage';



function Editor() {
  const editorRef = useRef(null);
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('// Write your code here');

  useEffect(() => {
    const state = EditorState.create({
      doc: code,
      extensions: [
        javascript(),
        oneDark,
        lineNumbers(),
        highlightActiveLine(),
        highlightActiveLineGutter(),
        EditorView.updateListener.of((update) => {
          if (update.changes) {
            setCode(update.state.doc.toString());
          }
        }),
      ],
    });

    const view = new EditorView({
      state,
      parent: editorRef.current,
    });

    return () => view.destroy();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const result = await fetchDataFromAPI('submitCode', {
        source_code: code,
        language_id: 71,
      });
      setOutput(result.stdout || result.stderr || 'No output');
    } catch (error) {
      setOutput('Error evaluating code');
    }
    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <h2>Python Coding Assignment</h2>
      <div ref={editorRef} style={{ border: '1px solid #ccc', borderRadius: '4px' }}></div>
      <button className="btn btn-primary mt-3" onClick={handleSubmit} disabled={loading}>
        {loading ? 'Evaluating...' : 'Submit'}
      </button>
      <div className="output mt-4">
        <h5>Output:</h5>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default Editor;
