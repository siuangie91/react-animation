import React from 'react';
/** @jsx jsx */
import { cx, jsx } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import { clockStyles, Hand, Hash } from './styled';

const Clock = () => {
  return (
    <div css={clockStyles}>
      {
        Array(12).fill('').map((hour, i) => 
          <Hash key={i} index={i}/>
        )
      }
      <Hand />
    </div>
  );
}

export default Clock;