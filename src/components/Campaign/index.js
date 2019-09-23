import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { campaignStyles } from './styled';
import Clock from '../Clock';

const Campaign = () => {
  return (
    <section css={campaignStyles}>
      <Clock />
    </section>
  );
}

export default Campaign;
