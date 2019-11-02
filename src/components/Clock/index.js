/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import withAnimContext from '../../context/withAnimContext';
import * as styled from './styled';
const { Hash } = styled;

const Clock = props => {
  const handleAnimationEnd = () => {
    // delay the scroll a little bit for aesthetic purposes
    setTimeout(() => {
      props.context.startScroll();
    }, 800);
  };

  return (
    <CSSTransition
      classNames={styled.animClassName}
      in={props.context.isAnimating}
      mountOnEnter
      addEndListener={node => 
        node.addEventListener('animationend', handleAnimationEnd)}
    >
      <div css={styled.clock}>
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