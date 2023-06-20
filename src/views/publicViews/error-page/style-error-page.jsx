import styled, { keyframes } from "styled-components";

export const errorPageTheme = {
  colors: {
    primary: "#20293f",
  },
};

const fadein = keyframes`
0% {
    margin-top: -50px;
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  transition: 1s;
  .error {
    color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 5px 0px -2px ${(props) => props.theme.colors.primary};
    text-align: center;
    animation: ${fadein} 1.2s ease-in;
    .code {
      font-size: 10.5em;
      text-shadow: 0 6px 1px rgba(0, 0, 0, 0.0980392), 0 0 5px rgba(0, 0, 0, 0.0980392),
        0 1px 3px rgba(0, 0, 0, 0.298039), 0 3px 5px rgba(0, 0, 0, 0.2),
        0 5px 10px rgba(0, 0, 0, 0.247059), 0 10px 10px rgba(0, 0, 0, 0.2),
        0 20px 20px rgba(0, 0, 0, 0.14902);
      margin: 0;
    }
    .des {
      text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5), 0px 6px 20px rgba(0, 0, 0, 0.3);
      font-weight: 400;
    }
  }
  .back-to-home {
    margin-top: 20px;
    padding: 0.8em 1.7em;
    background-color: transparent;
    border-radius: 0.3em;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: 0.5s;
    font-weight: 400;
    font-size: 17px;
    border: 1px solid;
    font-family: inherit;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primary};
    z-index: 1;
    &::before,
    &::after {
      content: "";
      display: block;
      width: 50px;
      height: 50px;
      transform: translate(-50%, -50%);
      position: absolute;
      border-radius: 50%;
      z-index: -1;
      background-color: ${(props) => props.theme.colors.primary};
      transition: 1s ease;
    }
    &::before {
      top: -1em;
      left: -1em;
    }
    &::after {
      left: calc(100% + 1em);
      top: calc(100% + 1em);
    }
    &:hover::before,
    &:hover::after {
      height: 410px;
      width: 410px;
    }
    &:hover {
      color: #fff;
    }
    &:active {
      filter: brightness(0.8);
    }
  }
`;

export default StyledWrapper;
