import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  CareerSection,
  SectionTitle,
  Subtitle,
  ContentWrapper,
  MainContent,
  ExperiencesList,
  ExperiencesTitle,
} from './styles';
import { Container } from '../../components/Container';

import JobDetails from '../../components/JobDetails';
import ExperienceCard from '../../components/ExperienceCard';
import { careerExperiences } from '../../data/careerData';

function Career({ id }) {
  const defaultActiveExperience = careerExperiences.find((exp) => exp.active);

  const [activeExperience, setActiveExperience] = useState(
    defaultActiveExperience || careerExperiences[0],
  );

  const handleCardClick = (experience) => {
    setActiveExperience(experience);
  };

  return (
    <CareerSection id={id}>
      <Container>

        <SectionTitle>Carreira</SectionTitle>
        <Subtitle>Full Stack Developer | UI UX</Subtitle>

        <ContentWrapper>

          <MainContent>
            {activeExperience.details && activeExperience.skills && (
            <JobDetails
              title={activeExperience.title}
              period={activeExperience.period}
              company={activeExperience.company}
              description={activeExperience.details}
              skills={activeExperience.skills}
            />
            )}
          </MainContent>

          <ExperiencesList>
            <ExperiencesTitle>Experiências</ExperiencesTitle>
            {careerExperiences.map((exp) => (
              <ExperienceCard
                key={exp.id}
                title={exp.title}
                period={exp.period}
                $active={exp.id === activeExperience.id}
                onClick={() => handleCardClick(exp)}
              />
            ))}
          </ExperiencesList>

        </ContentWrapper>

      </Container>
    </CareerSection>
  );
}

Career.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Career;
