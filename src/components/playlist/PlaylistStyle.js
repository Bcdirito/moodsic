import styled from 'styled-components';

export const PlaylistStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  iframe {
    max-width: 768px;
    width: 300px;
    box-shadow: 0px 0px 16px 16px #f2f6d0;
  }

  button {
    width: 288px;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    iframe {
      width: 400px;
    }

    button {
      margin-top: 3rem;
    }
  }

  @media (min-width: 1024px) {
    iframe {
      width: 600px;
    }
  }
`;
