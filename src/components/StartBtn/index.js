/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import withAnimContext from '../../context/withAnimContext';
import { buttonStyles, animClassName } from './styled';

const StartButton = props => {
  return (
    <CSSTransition
      classNames={animClassName} // all transition classes will start with `animClassName`
      in={!props.context.isAnimating} // show the component, and thereby trigger enter transitions, when `initAnim` state is false
      timeout={1000} // transition duration
      appear // transition on first mount
      unmountOnExit // unmount component when exit transitions are done
    >
      <button
        css={buttonStyles}
        onClick={props.context.startCampaign}
      >
        Start Animation
      </button>
    </CSSTransition>
  );
}

export default withAnimContext(StartButton);