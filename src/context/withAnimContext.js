import React from 'react';
import AnimContext from './AnimContext';

const withAnimContext = WrappedComponent => {
  return () => {
    return (
      <AnimContext.Consumer>
        {
          value => <WrappedComponent context={value} />
        }
      </AnimContext.Consumer>
    )
  }
};

export default withAnimContext;