import PropTypes from 'prop-types';

import {
  HomeContainer, Greeting, Name, Title, ButtonContainer,
} from './styles';
import { Container } from '../../components/Container';// Padding Global

import linkedinIcon from '../../assets/images/icons/linkedin-icon-green.svg';
import resumeIcon from '../../assets/images/icons/resume-icon.svg';

import Button from '../../components/ButtonHome';

function Home({ id }) {
  return (
    <HomeContainer id={id}>

      <Container>
        <Greeting>Olá, meu nome é</Greeting>
        <Name>Gustavo Barboza</Name>
        <Title>Full Stack Developer | UI UX</Title>

        <ButtonContainer>
          <Button outline variant="primary" iconSrc={linkedinIcon} href="https://www.linkedin.com/in/gustavonbarboza/">
            Me envie uma conexão no LikedIn
          </Button>
          <Button variant="secondary" iconSrc={resumeIcon} href="https://docs.google.com/document/d/1ZxSrhqrdSl1kaZ6OBtAcpYO4LkBO-k2RLvZEPZQNF0Q/export?format=pdf">
            Download do Currículo
          </Button>
        </ButtonContainer>
      </Container>

    </HomeContainer>
  );
}

Home.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Home;
