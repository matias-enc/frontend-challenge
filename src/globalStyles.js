import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
      background: #fafcff;

      font-family: 'Montserrat', sans-serif;
  }

`;

const spin = keyframes`
    0% {
    transform: rotate(0deg);
    }

    100% {
    transform: rotate(360deg);
  } 
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* padding-right: 50px;
  padding-left: 50px; */
  padding: 0 30px;
  &.shadow-sm {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
  @media screen and (max-width: 450px) {
    padding-right: 16px;
    padding-left: 16px;
  }
`;

export const Headings = styled.div`
  display: flex;
  width: 100%;
  font-size: 22px;
  font-weight: 600;
  color: #3d225d;
  margin-bottom: 30px;
`;

export const Spinner = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.15);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-left-color: #f0f0f4;

  animation: ${spin} 1s linear infinite;
`;

export default GlobalStyle;
