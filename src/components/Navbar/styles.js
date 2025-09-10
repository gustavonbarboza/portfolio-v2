import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 238px;
  height: 71px;
  border: 2px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.secondaryBackground};
  border-radius: 10px;
  padding: 10px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 10px;
  height: 100%;
`;

export const NavItem = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px 5px 0px 0px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${({ active, theme }) => active && `
    background-color: ${theme.secondaryVariants.transparent02};
    border-bottom: 2px solid ${theme.secondary};
  `}
`;

export const NavLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.text.light};
`;

export const NavIcon = styled.img`
  width: 21px;
  height: 19px;
  object-fit: contain;
`;
