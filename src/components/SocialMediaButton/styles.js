import styled from 'styled-components';

export const ButtonWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: ${({ theme }) => theme.primaryVariants.transparent03};
  border: 5px solid ${({ theme }) => theme.primary};
  border-radius: 10px;
  padding: 15px 25px;
  text-decoration: none;
  min-width: 250px;
  min-height: 80px;
  flex: 1;
`;

export const Icon = styled.img`
  width: 53px;
  height: 53px;
  object-fit: contain;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.primary};
  font-size: 22px;
  margin: 0;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-size: 16px;
  margin: 0;
`;
