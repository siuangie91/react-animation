import React, { useState } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import Container from './components/Container';
import buttonClass from './App.styled';

function App() {
  const [ initAnim, setInitAnim ] = useState(false);

  /**
   * Sets the `initAnim` state to `true`
   * @name handleClick
   */
  const handleClick = () => {
    setInitAnim(true);
  };

  return (
    <div className="App">
      {
        !initAnim && 
          <button
            css={buttonClass}
            onClick={handleClick}
          >
            Start Animation
          </button>
      }
      <Container initAnim={initAnim}/>
    </div>
  );
}

export default App;
