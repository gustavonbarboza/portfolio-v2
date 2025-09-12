import PropTypes from 'prop-types';
import {
  CardWrapper, ProjectImage, ProjectInfo, Highlight, Title, Details, Buttons,
} from './styles';
import ButtonProject from '../ButtonProject';

function ProjectCard({ project }) {
  return (
    <CardWrapper>
      <ProjectImage src={project.image} alt={project.title} />
      <ProjectInfo>
        <Highlight>{project.highlight}</Highlight>
        <Title>{project.title}</Title>
        <Details>{project.details}</Details>
        <Buttons>
          {project.links.map((link) => (
            <ButtonProject
              key={link.type}
              type={link.type}
              href={link.url}
            />
          ))}
        </Buttons>
      </ProjectInfo>
    </CardWrapper>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default ProjectCard;
