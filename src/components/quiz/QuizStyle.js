import styled from 'styled-components';

export const QuestionStyle = styled.div`
  max-width: 640px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  & > * {
    color: #0f7eea;
  }

  ul {
    margin-top: 2rem;
  }

  li {
    &:not(:first-child) {
      margin-top: 1.2rem;
    }
  }

  span {
    margin-left: 1rem;
    pointer-events: none;
  }

  #question-3 {
    flex-wrap: nowrap;
    flex-direction: column;

    button {
      padding-bottom: 0;
    }
  }

  @media (min-width: 768px) {
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
  }

  @media (min-width: 1024px) {
    ul {
      gap: 2.5rem;
    }
  }
`;

export const ImageStyle = styled.div`
  margin-top: 2rem;

  img {
    max-width: 75%;
    margin: 0 auto;
    border: 2.5px solid;
  }
`;

export const ImagePairStyle = styled.img`
  max-width: 50%;
  max-height: 100px;
  object-fit: cover;
  object-position: top;

  &:first-child {
    width: 150px;
  }
`;
