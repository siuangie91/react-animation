import { css } from '@emotion/core';

export const campaign = css`
  position: relative;  
  width: 100%;
  height: 350px;
  border-bottom: 1px solid #333;
  box-shadow: 0 0 8px #333;
  background: #96dcea; /* Old browsers */
  background: -moz-linear-gradient(top,  #96dcea 0%, #ffffff 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  #96dcea 0%,#ffffff 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  #96dcea 0%,#ffffff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#96dcea', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
  z-index: 2;
`;