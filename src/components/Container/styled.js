import { css } from '@emotion/core';

export const container = css`
  position: relative;
  left: 300px;
  width: 300px;
  height: 600px;
  border: 1px solid black;
  box-sizing: border-box;
  overflow: hidden;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
`;