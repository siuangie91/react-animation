import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import { CopyBlock, copyStyles, timeIsStyles, runningStyles, outStyles } from './styled';

const Copy = () => {
  return (
    <div css={copyStyles}>
      <CopyBlock css={timeIsStyles}>time is</CopyBlock>
      <CopyBlock css={runningStyles}>running</CopyBlock>
      <CopyBlock css={outStyles}>out</CopyBlock>
    </div>
  )
};

export default Copy;