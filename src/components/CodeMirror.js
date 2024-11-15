import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { githubDark } from '@uiw/codemirror-theme-github';
import { loadLanguage } from '../services/loadLanguage';

const CodeEditor = ({ currentCode, setCurrentCode, currentLanguage }) => {
  const [languageExtension, setLanguageExtension] = useState(null);

  useEffect(() => {
    const loadLang = async () => {
      const lang = await loadLanguage(currentLanguage);
      setLanguageExtension(lang);
    };
    loadLang();
  }, [currentLanguage]);

  return (
    <CodeMirror
    value={currentCode}
    height="400px"
    theme={githubDark}
    extensions={languageExtension ? [languageExtension] : []}
    onChange={(value) => setCurrentCode(value)}
    />

  );
};

export default CodeEditor;
