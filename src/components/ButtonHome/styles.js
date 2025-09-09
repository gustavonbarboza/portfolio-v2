import styled from 'styled-components';

export const StyledButton = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 15px;
  text-decoration: none;
  border-radius: 15px;
  font-size: 18px;
  font-family: 'Source Code Pro';
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  border: 2px solid ${({ theme, $variant }) => theme[$variant] || theme.primary};
  background-color: transparent;
  color: ${({ theme, $variant }) => theme[$variant] || theme.primary};

  &:hover {
    background-color: rgba(90, 224, 196, 0.1);
  }
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
`;
