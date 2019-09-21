import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { containerStyles } from './styled';
import ScrollingText from '../ScrollingText';
import Campaign from '../Campaign/index';

const Container = (props) => {
  const [ initScroll, setInitScroll ] = useState(false);

  useEffect(() => {
    if(!initScroll && props.initAnim) {
      setInitScroll(true);
    }
  }, [initScroll, props.initAnim]);

  return (
    <section css={containerStyles}>
      <Campaign />
      <ScrollingText beginScroll={initScroll} />
    </section>
  )
};

export default Container;