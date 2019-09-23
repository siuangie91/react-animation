import { css } from '@emotion/core';
import styled from '@emotion/styled';

const align = (where = 'centerAll') => {
  const base = `
    position: absolute;
    top: 50%;
    left: 50%;
  `;

  switch(where) {
    case 'centerVert':
      return `
        ${base}
        transform: translateY(-50%);
      `;
    case 'centerAll':
    default:
      return `
        ${base}
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

export const clockStyles = css`
  ${align()}
  ${round('180px')}
  border: 4px solid blue;
  box-sizing: border-box;

  &:before {
    content: '';
    display: block;
    ${align()}
    ${round('calc(100% - 8px)')};
    border: 4px solid black;
  }
`;

export const Hand = styled.div`
  ${align('centerVert')}
  width: 78px;
  height: 4px;
  background: red;

  &:before, &:after {
    ${makePseudo()}  
    position: absolute;
  }
  
  &:before {
    top: -3px;
    left: -3px;
    ${round('10px')}
    background: red;
  }

  &:after {
    top: -5px;
    right: -4px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7.5px 0 7.5px 15px;
    border-color: transparent transparent transparent red;
  }
`;

export const Hash = styled.div(({ index }) => `
  position: absolute;
  top: 6px;
  left: 50%;
  width: 2px;
  height: 80px;
  transform: rotate(${360/12 * index}deg);
  transform-origin: bottom;

  &:after {
    ${makePseudo()}
    position: absolute;
    width: 100%;
    height: 10px;
    background: #666;
  }
`);
