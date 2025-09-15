/* eslint-disable object-curly-newline */
import { useState, useEffect } from 'react';

import {
  NavContainer, NavList, NavItem, NavLink, NavIcon,
} from './styles';

import homeIcon from '../../assets/images/icons/home-icon.svg';
import fileIcon from '../../assets/images/icons/file-icon.svg';
import userIcon from '../../assets/images/icons/user-icon.svg';
import usersIcon from '../../assets/images/icons/users-icon.svg';

const navLinks = [
  { id: 'home', url: '#home', icon: homeIcon, alt: 'Home' },
  { id: 'career', url: '#career', icon: userIcon, alt: 'Carreira' },
  { id: 'projects', url: '#projects', icon: fileIcon, alt: 'Projetos' },
  { id: 'social-media', url: '#social-media', icon: usersIcon, alt: 'Midias Sociais' },
];

function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentActiveId = 'home';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentActiveId = section.id;
        }
      });

      setActiveLink(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavContainer>
      <NavList>
        {navLinks.map((link) => (
          <NavItem key={link.id} $active={link.id === activeLink}>
            <NavLink href={link.url}>
              <NavIcon src={link.icon} alt={link.alt} />
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
}

export default Navbar;
