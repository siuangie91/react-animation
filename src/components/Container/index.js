/** @jsx jsx */
import { jsx } from '@emotion/core';
import { container } from './styled';
import ScrollingText from '../ScrollingText';
import Campaign from '../Campaign/index';

const Container = () => {
  return (
    <section css={container}>
      <Campaign />
      <ScrollingText />
    </section>
  )
};

export default Container;