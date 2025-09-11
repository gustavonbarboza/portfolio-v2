import { projectDevelopingData } from '../../data/projectDevelopingData';

import {
  BackgroundContainer,
  CardContainer,
  ImageGrid,
  ProjectDetails,
  Buttons,
  Image,
  ImageWrapper,
  Title,
  Highlight,
  Details,
} from './styles';
import { Container } from '../Container';

import ButtonProject from '../ButtonProject';

function DevelopingProjectCard() {
  const data = projectDevelopingData;

  const backgroundImageUrl = data.images[0];
  const screenshots = data.images.slice(1, 5);

  return (
    <BackgroundContainer backgroundImage={backgroundImageUrl}>
      <Container>
        <CardContainer>

          <ProjectDetails>

            <Highlight>
              <p>{data.highlight}</p>
            </Highlight>

            <Title>{data.title}</Title>
            <Details>{data.details}</Details>
            <Buttons>
              {data.links.map((link) => (
                <ButtonProject
                  key={link.type}
                  type={link.type}
                  href={link.url}
                />
              ))}
            </Buttons>
          </ProjectDetails>

          <ImageGrid>
            {screenshots.map((image) => (
              <ImageWrapper key={image}>
                <Image src={image} alt="Project screenshot" />
              </ImageWrapper>
            ))}
          </ImageGrid>

        </CardContainer>
      </Container>
    </BackgroundContainer>
  );
}

export default DevelopingProjectCard;
