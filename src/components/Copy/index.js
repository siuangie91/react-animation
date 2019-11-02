import { useState } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import withAnimContext from '../../context/withAnimContext';
import CopyBlock from '../CopyBlock';
import * as styled from './styled';

const Copy = props => {
  const [ start2nd, setStart2nd ] = useState(false);
  const [ start3rd, setStart3rd ] = useState(false);

  const animClassName = 'copy';

  return (
    <div css={styled.copy}>
      <CopyBlock
        animClassName={animClassName}
        inProp={props.context.isAnimating}
        endHandler={() => {
          setStart2nd(true); // only trigger fadein of 2nd block on transitionend
        }}
        styles={styled.timeIs}
      >
        time is
      </CopyBlock>

      <CopyBlock
        animClassName={animClassName}
        inProp={start2nd}
        endHandler={() => {
          setStart3rd(true); // trigger fadein of 3rd block
        }}
        styles={styled.running}
      >
        running
      </CopyBlock>

      <CopyBlock
        animClassName={animClassName}
        inProp={start3rd}
        endHandler={props.context.startClock}
        styles={styled.out}
      >
        out
      </CopyBlock>
    </div>
  )
};

export default withAnimContext(Copy);