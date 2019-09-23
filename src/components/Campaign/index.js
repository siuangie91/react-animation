import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { campaignStyles } from './styled';
import Clock from '../Clock';
import Copy from '../Copy';

const Campaign = () => {
  return (
    <section css={campaignStyles}>
      <Copy />
      <Clock />
    </section>
  );
}

export default Campaign;
