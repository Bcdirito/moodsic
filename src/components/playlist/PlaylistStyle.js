import styled from 'styled-components';

export const PlaylistStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  iframe {
    max-width: 768px;
    width: 300px;
    height: 400px;
    box-shadow: 0px 0px 8px 8px #f2f6d0;
  }

  button {
    width: 288px;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    iframe {
      width: 400px;
      height: 500px;
    }

    button {
      margin-top: 3rem;
    }
  }

  @media (min-width: 1024px) {
    iframe {
      width: 550px;
      height: 700px;
    }
  }
`;
