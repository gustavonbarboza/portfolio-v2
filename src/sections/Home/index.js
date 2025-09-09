import {
  HomeContainer, Greeting, Name, Title, ButtonContainer,
} from './styles';
import { Container } from '../../components/Container';// Padding Global

import linkedinIcon from '../../assets/images/icons/linkedin-icon.svg';
import resumeIcon from '../../assets/images/icons/resume-icon.svg';

import Button from '../../components/ButtonHome';

function Home() {
  return (
    <HomeContainer>

      <Container>
        <Greeting>Olá, meu nome é</Greeting>
        <Name>Gustavo Barboza</Name>
        <Title>Full Stack Developer | UI UX</Title>

        <ButtonContainer>
          <Button outline variant="primary" iconSrc={linkedinIcon} href="#">
            Me envie uma conexão no LikedIn
          </Button>
          <Button variant="secondary" iconSrc={resumeIcon} href="#">
            Download do Currículo
          </Button>
        </ButtonContainer>
      </Container>

    </HomeContainer>
  );
}

export default Home;
