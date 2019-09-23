import React from 'react';
/** @jsx jsx */
import { cx, jsx } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import { clockStyles, MinuteHand } from './styled';

const Clock = () => {
  return (
    <div css={clockStyles}>
      <MinuteHand />
    </div>
  );
}

export default Clock;