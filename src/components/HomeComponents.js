/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  background-color: black;
  border: 2px dashed yellow;
  & h1 {
    font-size: 49px;
    line-height: 54px;
    font-family: "Passion One";
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #FFFFFF;
  }
`;

export {
  Header,
};
