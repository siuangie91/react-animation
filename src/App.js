import React, { useState } from 'react';
/** @jsx jsx */
import { cx, jsx } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import Container from './components/Container';
import { buttonStyles, animClassName } from './App.styled';

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
      <CSSTransition 
        classNames={animClassName} // all transition classes will start with `animClassName`
        in={!initAnim} // show the component, and thereby trigger enter transitions, when `initAnim` state is false
        timeout={1000} // transition duration
        appear // transition on first moutn
        unmountOnExit // unmount component when exit transitions are done
      >
        <button
          css={buttonStyles}
          onClick={handleClick}
        >
          Start Animation
        </button>
      </CSSTransition>
      <Container initAnim={initAnim}/>
    </div>
  );
}

export default App;
