import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const align = (where = 'centerAll') => {
  switch(where) {
    case 'centerVert':
      return `
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      `;
    case 'centerHoriz':
      return `
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      `;
    case 'centerAll':
    default:
      return `
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `;
  }
};

const round = size => `
  width: ${size};
  height: ${size};
  border-radius: 100%;
`;

const makePseudo = (content = '') => `
  content: '';
  display: block;
`;

export const animClassName = 'clock';

const clockFadeinDuration = '600ms';
const tickDuration = '3000ms';
const tickSteps = 12;

const shake = keyframes`
  0, 50%, 100% {
    margin-left: 0px;
  }
  25% {
    margin-left: 5px;
  }
  75% {
    margin-left: -5px;
  }
`;

export const clock = css`
  ${align('centerHoriz')}
  bottom: 20px;
  ${round('180px')}
  border: 4px solid blue;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 0 11px #000, inset 0 0 14px 4px #333;

  &:before {
    content: '';
    display: block;
    ${align()}
    ${round('calc(100% - 8px)')};
    border: 4px solid black;
  }

  &.${animClassName}-enter {
    opacity: 0;
  }
  &.${animClassName}-enter-active {
    opacity: 1;
    transition: opacity ${clockFadeinDuration};
  }
`;

export const shaking = css`
  animation: ${shake};
  animation-iteration-count: 20;
  animation-duration: 100ms;
  animation-timing-function: linear;
  animation-delay: 400ms;
`;

const tick = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const handShadow = `
  box-shadow: 2px 0px 4px #333;
`;

export const hand = css`
  ${align('centerHoriz')}
  top: 8px;
  height: 78px;
  width: 4px;
  background: red;
  ${handShadow}
  transform-origin: bottom;
  animation: ${tick} ${tickDuration} steps(${tickSteps}, end);
  animation-delay: ${clockFadeinDuration};

  &:before, &:after {
    ${makePseudo()}  
    position: absolute;
  }
  
  &:before {
    bottom: -3px;
    left: -3px;
    ${round('10px')}
    background: red;
    ${handShadow}
  }

  &:after {
    top: -5px;
    left: -5px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 7.5px 15px 7.5px;
    border-color: transparent transparent red transparent;
  }
`;

export const Hash = styled.div(({ index }) => `
  position: absolute;
  top: 6px;
  left: 50%;
  width: 2px;
  height: 80px;
  transform: rotate(${30 * index}deg);
  transform-origin: bottom;

  &:after {
    ${makePseudo()}
    position: absolute;
    width: 100%;
    height: 10px;
    background: #666;
  }
`);
