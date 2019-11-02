import { useEffect, useRef } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import withAnimContext from '../../context/withAnimContext';
import * as styled from './styled';
import text from './text';

/**
 * Programmatically smoothly scrolls content to its bottom
 * @name autoScroll
 * @param {Object} section - the React ref of the section containing the text container
 * @param {*} textfullHeight - the full height of the text, as measured by the height of text container 
 */
const autoScroll = (section, textfullHeight) => {
  const sectionHeight = section.offsetHeight;

  let toBottom, toTop;

  toBottom = setInterval(() => {
    let currentPos = section.scrollTop;
    if(currentPos < (textfullHeight - sectionHeight)) {
      section.scrollTop = currentPos + 1;
      currentPos = section.scrollTop;
    } else {
      clearInterval(toBottom);
      toBottom = undefined;

      toTop = setInterval(() => {
        if(currentPos > 0) {
          section.scrollTop = currentPos - 10;
          currentPos = section.scrollTop;
        } else {
          clearInterval(toTop);
          toTop = undefined;
        }
      }, 10);
    }
  }, 50);
};

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
        {text.map((block, i) => <p key={i} css={styled.paragraph}>{block}</p>)}
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