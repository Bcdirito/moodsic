import styled from 'styled-components';
import blob from '../../global/svg/blob-primary.svg';

// background-image: url(${blob});

const QuestionStyle = styled.div`
  max-width: 768px;
  padding: 1rem;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  & > * {
    color: #0f7eea;
  }

  h3 {
    text-align: center;
  }

  ul {
    margin-top: 2rem;
  }

  li {
    &:not(:first-child) {
      margin-top: 1.2rem;
    }
  }

  button {
    border-radius: 36px;
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 0px 8px 8px 0px #dcdba8;
  }

  @media (min-width: 768px) {
    padding: 2rem;

    h3 {
      font-size: 2.5rem;
    }

    ul {
      margin-top: 2.5rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
    }

    li:not(:first-child) {
      margin-top: 0;
    }

    button {
      min-width: 196px;
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    ul {
      gap: 2.5rem;
    }

    button {
      min-width: 288px;
    }
  }
`;

export default QuestionStyle;
