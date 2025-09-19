import styled from 'styled-components';

export const StyledButton = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 15px;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  border: 2px solid ${({ theme }) => theme.primary};
  background-color: transparent;
  color: ${({ theme }) => theme.primary};

  ${({ $type, theme }) => $type === 'demostracao' && `
    background-color: ${theme.primary};
    color: ${theme.background};
  `}

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 16px;
    gap: 8px;
  }
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
