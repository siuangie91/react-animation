import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import withAnimContext from '../../context/withAnimContext';
import { clockStyles, Hand, Hash, animClassName } from './styled';

const Clock = props => {
  return (
    <CSSTransition
      classNames={animClassName}
      in={props.context.isAnimating}
      mountOnEnter
      timeout={3000}
    >
      <div css={clockStyles}>
        {
          Array(12).fill('').map((hour, i) => 
            <Hash key={i} index={i}/>
          )
        }
        <Hand />
      </div>
    </CSSTransition>
  );
}

export default withAnimContext(Clock);