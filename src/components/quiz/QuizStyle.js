import styled from 'styled-components';

export const QuestionStyle = styled.div`
  max-width: 768px;
  padding: 1rem;
  margin-top: auto;
  margin-bottom: auto;

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
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 8px 8px 0px #dcdba8;
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
    padding: 4rem 2rem;

    h3 {
      font-size: 3rem;
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
