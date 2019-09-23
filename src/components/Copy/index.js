import { useState } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import withAnimContext from '../../context/withAnimContext';
import CopyBlock from '../CopyBlock';
import { copyStyles, timeIsStyles, runningStyles, outStyles } from './styled';

const Copy = props => {
  const [ start2nd, setStart2nd ] = useState(false);
  const [ start3rd, setStart3rd ] = useState(false);

  const animClassName = 'copy';

  window.Copy = {
    start2nd,
    start3rd,
    props
  }

  return (
    <div css={copyStyles}>
      <CopyBlock
        animClassName={animClassName}
        inProp={props.context.isAnimating}
        timeout={800}
        endHandler={() => {
          setStart2nd(true); // only trigger fadein of 2nd block on transitionend
        }}
        styles={timeIsStyles}
      >
        time is
      </CopyBlock>

      <CopyBlock
        animClassName={animClassName}
        inProp={start2nd}
        timeout={800}
        endHandler={() => {
          setStart3rd(true); // trigger fadein of 3rd block
        }}
        styles={runningStyles}
      >
        running
      </CopyBlock>

      <CopyBlock
        animClassName={animClassName}
        inProp={start3rd}
        timeout={800}
        endHandler={props.context.startClock}
        styles={outStyles}
      >
        out
      </CopyBlock>
    </div>
  )
};

export default withAnimContext(Copy);