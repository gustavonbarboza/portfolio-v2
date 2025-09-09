import PropTypes from 'prop-types';
import {
  DetailsContainer, Title, Period, Description, Skills, SkillTag,
} from './styles';

import calendarIcon from '../../assets/images/icons/calendar-icon.svg';

function JobDetails({
  title, period, description, skills,
}) {
  return (
    <DetailsContainer>
      <Title>{title}</Title>
      <Period>
        <img src={calendarIcon} alt="calendar-icon" />
        {period}
      </Period>
      <Description>
        {description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Description>
      <Skills>
        {skills.map((skill) => (
          <SkillTag key={skill}>{skill}</SkillTag>
        ))}
      </Skills>
    </DetailsContainer>
  );
}

JobDetails.propTypes = {
  title: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default JobDetails;
