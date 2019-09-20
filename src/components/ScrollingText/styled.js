import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const scrollingTextStyles = css`
  position: absolute;
  width: 100%;
  height: 250px;
  left: 0;
  bottom: 0;
  border-top: 1px solid #333;
  padding: 0 10px;
  background: #dedede;
  overflow-y: auto;
  box-shadow: 0 0 8px #666 inset;
`;

export const Paragraph = styled.p`
  margin: 10px 0;
`;

export const Logo = styled.div`
  width: 100px;
  height: 60px;
  background: red;
  transform: skew(-30deg) translateX(20px);

  span {
    display: block;
    line-height: 60px;
    text-align: center;
    transform: skew(30deg);
  }
`;