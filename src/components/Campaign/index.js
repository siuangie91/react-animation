import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import { campaignStyles } from './styled';
import Clock from '../Clock';
import Copy from '../Copy';

const Campaign = props => {
  return (
    <section css={campaignStyles}>
      <Copy/>
      <Clock />
    </section>
  );
}

export default Campaign;
