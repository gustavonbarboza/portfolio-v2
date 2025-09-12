/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import PropTypes from 'prop-types';

import {
  SocialMediaContainer,
  Subtitle,
  SectionTitle,
  Buttons,
  Divider,
  FooterText,
} from './styles';
import { Container } from '../../components/Container';
import SocialMediaButton from '../../components/SocialMediaButton';

import githubIcon from '../../assets/images/icons/github-icon.svg';
import linkedinIcon from '../../assets/images/icons/linkedin-icon-white.svg';
import instagramIcon from '../../assets/images/icons/instagram-icon.svg';

function SocialMedia({ id }) {
  return (
    <SocialMediaContainer id={id}>
      <Container>
        <Subtitle>Redes Socias</Subtitle>
        <SectionTitle>Me adicione nas redes e veja meu trabalho.</SectionTitle>

        <Buttons>
          <SocialMediaButton
            title="GitHub"
            subtitle="Meus projetos em código"
            iconSrc={githubIcon}
            href="https://github.com/gustavonbarboza"
          />
          <SocialMediaButton
            title="LinkedIn"
            subtitle="Carreira e Network"
            iconSrc={linkedinIcon}
            href="https://www.linkedin.com/in/gustavonbarboza"
          />
          <SocialMediaButton
            title="Instagram"
            subtitle="Me conhecer melhor"
            iconSrc={instagramIcon}
            href="https://www.instagram.com/gustavobarboza._/"
          />
        </Buttons>

        <Divider />
        <FooterText>
          Este projeto foi desenhado no <strong>Figma</strong> e desenvolvido no <strong>Visual Studio Code</strong> por Gustavo Barboza
        </FooterText>

      </Container>
    </SocialMediaContainer>
  );
}

SocialMedia.propTypes = {
  id: PropTypes.string.isRequired,
};

export default SocialMedia;
