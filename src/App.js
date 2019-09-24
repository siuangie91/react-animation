/** @jsx jsx */
import { jsx } from '@emotion/core';
import AnimProvider from './context/AnimProvider';
import Annotation from './components/Annotation';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <AnimProvider>
        <Annotation />
        <Container/>
      </AnimProvider>
    </div>
  );
}

export default App;
