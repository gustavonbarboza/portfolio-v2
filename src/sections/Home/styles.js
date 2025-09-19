import styled from 'styled-components';

export const HomeContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Greeting = styled.p`
  color: ${({ theme }) => theme.primary};
  font-family: 'Source Code Pro';
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Name = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.light};

  @media (max-width: 768px) {
    font-size: 45px;
  }
`;

export const Title = styled.h2`
  font-size: 50px;
  color: ${({ theme }) => theme.text.muted};
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;
