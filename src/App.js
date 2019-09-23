import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import AnimProvider from './context/AnimProvider';
import Container from './components/Container';
import StartBtn from './components/StartBtn';


function App() {
  return (
    <div className="App">
      <AnimProvider>
        <StartBtn />
        <Container/>
      </AnimProvider>
    </div>
  );
}

export default App;
