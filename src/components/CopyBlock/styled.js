import styled from '@emotion/styled';

export const animClassName = 'copy';

export const Block = styled.span(({ animClassName }) => `
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
`);
