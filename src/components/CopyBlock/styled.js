import { css } from '@emotion/core'

export const animClassName = 'copy';

export const block = css`
  display: block;
  text-align: center;
  text-transform: uppercase;

  &.${animClassName}-enter {
    opacity: 0;
  }
  &.${animClassName}-enter-active {
    opacity: 1;
    transition: opacity 1000ms;
    transition-delay: 400ms;
  }
`;
