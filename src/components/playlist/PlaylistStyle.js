import styled from 'styled-components';

export const PlaylistStyle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  iframe {
    max-width: 768px;
    width: 300px;
    box-shadow: 0px 0px 16px 16px #f2f6d0;
  }

  @media (min-width: 768px) {
    iframe {
      width: 400px;
    }
  }

  @media (min-width: 1024px) {
    iframe {
      width: 600px;
    }
  }
`;
