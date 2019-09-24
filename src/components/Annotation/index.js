/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import StartBtn from '../../components/StartBtn';
import { annotationStyles, h1Styles, listStyles } from './styled';

const Annotation = () => {
  return (
    <div css={annotationStyles}>
      <h1 css={h1Styles}>React Banner Ad</h1>
      <p>Click Start Animation to start the banner ad.</p>
      <ol css={listStyles}>
        <li>When banner is started, the copy "Time is running out" should fade in, line by line, with a total of 3 lines.</li>
        <li>At the same that the copy begins to fade in, the clock should appear and start ticking.</li>
        <li>The copy and clock should finish animating roughly around the same time.</li>
        <li>After a very brief pause, the text will begin to autoscroll to the bottom. (Manual scrolling still works.)</li>
        <li>When the text reaches the bottom, it will autoscroll back up to the top.</li>
      </ol>
      <StartBtn />
    </div>
  );
};

export default Annotation;
