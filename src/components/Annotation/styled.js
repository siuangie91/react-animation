import { css } from '@emotion/core';

export const annotation = css`
  position: absolute;
  width: 280px;
  height: auto;
  padding: 10px 20px 10px 10px;
  box-sizing: border-box;

  * {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.4rem;
    box-sizing: border-box;
  }
`;

export const h1 = css`
  font-size: 28px;
  margin-bottom: 10px;
`;

export const list = css`
  margin: 12px 0 10px 20px;

  li {
    line-height: 1.4rem;
    margin-bottom: 20px;
  }
`;