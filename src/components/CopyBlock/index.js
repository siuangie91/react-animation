import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import { Block } from './styled';

const CopyBlock = ({ animClassName, inProp, timeout, endHandler, children, styles}) => {
  const handleTransitionEnd = (node, fn) => {
    node.addEventListener('transitionend', fn);
  };

  return (
    <CSSTransition
      classNames={animClassName}
      in={inProp}
      timeout={timeout}
      mountOnEnter // don't start the fadein until mounted
      addEndListener={node => handleTransitionEnd(node, endHandler)}
    >
      <Block css={styles} animClassName={animClassName}>{children}</Block>
    </CSSTransition>
  );
};

export default CopyBlock;
