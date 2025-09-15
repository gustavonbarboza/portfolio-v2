import styled from 'styled-components';

export const CardButton = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;
  padding: 15px 25px;
  border-left: 2px solid ${({ theme }) => theme.text.muted};
  transition: all 0.3s ease-in-out;

  ${({ $active, theme }) => $active && `
    background-color: ${theme.primaryVariants.transparent02};
    border-left-color: ${theme.primary};
  `}
`;

export const Title = styled.h4`
  font-size: 20px;
  color: ${({ theme }) => theme.text.light};
`;

export const Period = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.text.muted};
  margin-top: 5px;
`;
