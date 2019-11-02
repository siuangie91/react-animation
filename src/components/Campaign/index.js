import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { campaign } from './styled';
import Clock from '../Clock';
import Copy from '../Copy';

const Campaign = () => {
  return (
    <section css={campaign}>
      <Copy/>
      <Clock />
    </section>
  );
}

export default Campaign;
