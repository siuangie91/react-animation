import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { containerStyles } from './styled';
import ScrollingText from '../ScrollingText';
import Campaign from '../Campaign/index';

const Container = () => {
  return (
    <section css={containerStyles}>
      <Campaign />
      <ScrollingText />
    </section>
  )
};

export default Container;