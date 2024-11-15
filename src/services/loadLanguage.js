export const loadLanguage = async (language) => {
    switch (language) {
      case 'javascript':
        return (await import('@codemirror/lang-javascript')).javascript();
      case 'python':
        return (await import('@codemirror/lang-python')).python();
      case 'java':
        return (await import('@codemirror/lang-java')).java();
      case 'cpp':
        return (await import('@codemirror/lang-cpp')).cpp();
      case 'json':
        return (await import('@codemirror/lang-json')).json();
      case 'html':
        return (await import('@codemirror/lang-html')).html();
      case 'markdown':
        return (await import('@codemirror/lang-markdown')).markdown();
      case 'text':
        
        return null;
      default:
        return null;
    }
  };
  