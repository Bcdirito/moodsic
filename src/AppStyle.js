import styled, { keyframes, css, createGlobalStyle } from 'styled-components';

const animations = {
  moveGradient: keyframes`
    50% {
      background-position: 100% 50%;
    }`
};

const colors = {
  primary: '#0f7eea',
  secondary: '#f7a072',
  tertiary: '#f2f6d0',
  ink: '#031926',
  beige: '#fbf8f5'
};

const mixins = {
  addGradient: css`
    background: linear-gradient(${colors.beige}, ${colors.beige}) padding-box,
      linear-gradient(
          to right,
          #fc4778ff,
          #dc498dff,
          #bb4ba2ff,
          #9b4db7ff,
          #7a4ecbff,
          #5a50e0ff,
          #3952f5ff
        )
        border-box;
    background-size: 300% 300%;
    border: 2.75px solid transparent;
    animation-name: ${animations.moveGradient};
    animation-duration: 4s;
    animation-fill-mode: alternate infinite;
  `
};

export const AppStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 1rem;
  background-color: ${colors.beige};
  overflow-y: scroll;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    line-height: 1.2;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.5;
    font-family: 'Branic', serif;
    font-weight: 900;
    color: ${colors.primary};
  }

  p,
  button {
    font-family: 'Anodina', sans-serif;
  }

  h3 {
    font-size: 1.5rem;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  img {
    width: 100%;
    display: block;
  }

  button {
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.beige};
    border: 2.75px solid ${colors.primary};
    border-radius: 36px;
    box-shadow: 0px 8px 8px 0px ${colors.tertiary};
    padding: 1rem;
    position: relative;
    color: ${colors.primary};
    outline: none;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      ${mixins.addGradient}
    }
  }

  section {
    max-width: 768px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
  }

  @media (min-width: 768px) {
    button {
      min-width: 288px;
      font-size: 1.25rem;
    }
  }
`;
