import PropTypes from 'prop-types';

import {
  ProjectsSection, ProjectsContainer, SectionTitle, Subtitle, CarouselWrapper,
} from './styles';
import { Container } from '../../components/Container';

import { projectsData } from '../../data/projectsData';
import ProjectCard from '../../components/ProjectCard';

// Caso não tiver nenhum projeto em desenvolvimento, apenas comentar esse Import e o Componente
import DevelopingProjectCard from '../../components/DevelopingProjectCard';

function Projects({ id }) {
  return (
    <ProjectsSection id={id}>

      <DevelopingProjectCard />

      <Container>
        <ProjectsContainer>

          <SectionTitle>Projetos</SectionTitle>
          <Subtitle>Outros projetos ao longo da minha carreira</Subtitle>

          <CarouselWrapper>
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </CarouselWrapper>

        </ProjectsContainer>
      </Container>

    </ProjectsSection>
  );
}

Projects.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Projects;
