/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core';

export const animClassName = 'start-btn';

export const buttonClass = css`
  position: absolute;
  top: 10px; 
  left: 350px;
  width: 120px;
  height: 30px;
  border: none;
  border-radius: 3px;
  background: #4fdb87;
  box-shadow: 0 2px 2px #333;
  font-size: 14px;
  cursor: pointer;

  &:active {
    margin-top: 2px;
    box-shadow: none;
  }

  &.${animClassName}-appear {
    opacity: 0;
  }
  &.${animClassName}-appear-active {
    opacity: 1;
    transition: opacity 800ms;
  }
  &.${animClassName}-exit-active {
    opacity: 0;
    transition: opacity 800ms;
    transition-delay: 200ms;
  }
`;