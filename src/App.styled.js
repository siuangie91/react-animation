/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const buttonClass = css`
  position: absolute;
  top: 10px; 
  left: 350px;
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
`;

export default buttonClass;