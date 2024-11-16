import React, { useState, useEffect, useRef } from 'react';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { oneDark } from '@codemirror/theme-one-dark';
import { lineNumbers } from '@codemirror/gutter';
import { highlightActiveLine, highlightActiveLineGutter } from '@codemirror/view';

function Editor({ languageId = 71 }) {
  const editorRef = useRef(null);
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('// Write your code here');

  const getLanguageExtension = () => {
    switch (languageId) {
      case 63:
        return javascript();
      case 62:
        return java();
      default:
        return python();
    }
  };

  useEffect(() => {
    const state = EditorState.create({
      doc: code,
      extensions: [
        getLanguageExtension(),
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
  }, [code, getLanguageExtension]); 

  const handleRunCode = async () => {
    console.log('Running code:', code);
    console.log('Selected language:', languageId);
    setOutput(code);
  };

  return (
    <div className="container mt-5">
      <h2>Coding Assignment</h2>
      <div ref={editorRef} style={{ border: '1px solid #ccc', borderRadius: '4px' }}></div>
      <button className="btn btn-primary mt-3" onClick={handleRunCode} disabled={loading}>
        Run Code
      </button>
      <div className="output mt-4">
        <h5>Output:</h5>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default Editor;
