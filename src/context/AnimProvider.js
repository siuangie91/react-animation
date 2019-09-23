import React, { useState } from 'react';
import AnimContext from './AnimContext';

const AnimProvider = ({ children }) => {
  const [ isAnimating, setIsAnimating ] = useState(false);

  const startCampaign = () => {
    setIsAnimating(true);
  }

  return (
    <AnimContext.Provider
      name="AnimContextProvider"
      value={{
        isAnimating,
        startCampaign
      }}
    >
      {children}
    </AnimContext.Provider>
  );
};

export default AnimProvider;