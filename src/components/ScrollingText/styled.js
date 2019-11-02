import { css } from '@emotion/core';

export const scrollingText = css`
  position: absolute;
  width: 100%;
  height: 250px;
  left: 0;
  bottom: 0;
  border-top: 1px solid #333;
  padding: 0 10px;
  background: #dedede;
  overflow-y: auto;
`;

export const paragraph = css`
  margin: 10px 0;
`;

export const logo = css`
  width: 100px;
  height: 60px;
  background: red;
  transform: skew(-30deg) translateX(20px);
`;

export const logoText = css`
  display: block;
  line-height: 60px;
  text-align: center;
  transform: skew(30deg);
`;