import React from 'react';
import {flipCard} from '../components/Card';

/** 
 * python assignments page
 */
function python() {
  return (
    <div style={{ padding: '2em', textAlign: 'center' }}>
    <h1>Python</h1>
    {flipCard("Python", "Python assignments","py_logo.png","answer")}
    </div>
  );
}

export default python;
