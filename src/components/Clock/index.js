import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import withAnimContext from '../../context/withAnimContext';
import * as styled from './styled';
const { Hash } = styled;

const Clock = props => {
  const [ shouldShake, setShouldShake ] = useState(false);
  
  const handleAnimationEnd = () => {
    setShouldShake(true);

    // delay the scroll a little bit for aesthetic purposes
    setTimeout(() => {
      props.context.startScroll();
    }, 2800);
  };

  // TODO: is there a way to trigger a 2nd set of animations?
  const clockStyle = shouldShake ? [ styled.clock, styled.shaking ] : styled.clock;

  return (
    <CSSTransition
      classNames={styled.animClassName}
      in={props.context.isAnimating}
      mountOnEnter
      addEndListener={node => 
        node.addEventListener('animationend', handleAnimationEnd)}
    >
      <div css={clockStyle}>
        {
          Array(12).fill('').map((hour, i) => 
            <Hash key={i} index={i}/>
          )
        }
        <div css={styled.hand} />
      </div>
    </CSSTransition>
  );
}

export default withAnimContext(Clock);