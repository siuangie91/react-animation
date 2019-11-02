import { useEffect, useRef } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import withAnimContext from '../../context/withAnimContext';
import * as styled from './styled';
import autoScroll from './autoscroll';
import text from './text';

const ScrollingText = props => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    if(props.context.isScrolling) {
      const fullHeight = containerRef.current.offsetHeight;
      autoScroll(sectionRef.current, fullHeight);
    }
  }, [props.context.isScrolling]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section 
      css={styled.scrollingText}
      ref={sectionRef}
    >
      <div ref={containerRef}>
        {text.map((block, i) => 
          <p key={i} css={styled.paragraph}>{block}</p>
        )}
        <br/>
        <div css={styled.logo}>
          <span css={styled.logoText}>The Logo</span>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </section>
  );
};

export default withAnimContext(ScrollingText);