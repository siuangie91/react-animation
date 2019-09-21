import React, { useState } from 'react';
import Container from './components/Container';

function App() {
  const [ initAnim, setInitAnim ] = useState(false);

  const handleClick = () => {
    setInitAnim(true);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Start Animation</button>
      <Container initAnim={initAnim}/>
    </div>
  );
}

export default App;
