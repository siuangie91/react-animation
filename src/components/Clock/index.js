/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import withAnimContext from '../../context/withAnimContext';
import { clockStyles, Hand, Hash, animClassName } from './styled';

const Clock = props => {
  const handleAnimationEnd = () => {
    // delay the scroll a little bit for aesthetic purposes
    setTimeout(() => {
      props.context.startScroll();
    }, 800);
  };

  return (
    <CSSTransition
      classNames={animClassName}
      in={props.context.isAnimating}
      mountOnEnter
      addEndListener={node => 
        node.addEventListener('animationend', handleAnimationEnd)}
    >
      <div css={clockStyles}>
        {
          Array(12).fill('').map((hour, i) => 
            <Hash key={i} index={i}/>
          )
        }
        <Hand />
      </div>
    </CSSTransition>
  );
}

export default withAnimContext(Clock);