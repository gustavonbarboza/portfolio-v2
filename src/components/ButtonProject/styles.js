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
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
`;
