/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import { block } from './styled';

const CopyBlock = ({ animClassName, inProp, endHandler, children, styles}) => {
  const handleTransitionEnd = (node, fn) => {
    node.addEventListener('transitionend', fn);
  };

  return (
    <CSSTransition
      classNames={animClassName}
      in={inProp}
      mountOnEnter // don't start the fadein until mounted
      addEndListener={node => handleTransitionEnd(node, endHandler)} // with addEndListener, no need for `timeout`
    >
      <span css={[block, styles]}>{children}</span>
    </CSSTransition>
  );
};

export default CopyBlock;
