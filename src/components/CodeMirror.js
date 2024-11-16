import React, { useEffect, useRef } from 'react';
import { EditorView, keymap } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { defaultKeymap } from '@codemirror/commands';

function CodeMirrorEditor({ value, onChange, currentLanguage }) {
  const editorRef = useRef(null);
  const viewRef = useRef(null);

  useEffect(() => {
    const updateListener = EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        const newCode = update.state.doc.toString();
        onChange(newCode);
      }
    });

    const state = EditorState.create({
      doc: value,
      extensions: [
        currentLanguage === 'python' ? python() : javascript(),
        keymap.of(defaultKeymap),
        updateListener,
        EditorView.lineWrapping, // Enable multi-line input
      ],
    });

    viewRef.current = new EditorView({
      state,
      parent: editorRef.current,
    });

    return () => {
      viewRef.current.destroy();
      viewRef.current = null;
    };
  }, [currentLanguage]);

  useEffect(() => {
    const currentDoc = viewRef.current.state.doc.toString();
    if (currentDoc !== value) {
      viewRef.current.dispatch({
        changes: { from: 0, to: currentDoc.length, insert: value },
      });
    }
  }, [value]);

  return (
    <div
      ref={editorRef}
      style={{ height: '400px', border: '1px solid #ddd', overflowY: 'auto' }}
    ></div>
  );
}

export default CodeMirrorEditor;
