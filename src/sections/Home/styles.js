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
`;

export const Name = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.light};
`;

export const Title = styled.h2`
  font-size: 50px;
  color: ${({ theme }) => theme.text.muted};
  margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
