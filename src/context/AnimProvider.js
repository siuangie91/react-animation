import React, { useState } from 'react';
import AnimContext from './AnimContext';

const AnimProvider = ({ children }) => {
  const [ isAnimating, setIsAnimating ] = useState(false);
  const [ isScrolling, setIsScrolling ] = useState(false);

  const startCampaign = () => {
    setIsAnimating(true);
  };

  const startScroll = () => {
    setIsScrolling(true);
  }

  return (
    <AnimContext.Provider
      name="AnimContextProvider"
      value={{
        isAnimating,
        startCampaign,
        isScrolling,
        startScroll
      }}
    >
      {children}
    </AnimContext.Provider>
  );
};

export default AnimProvider;