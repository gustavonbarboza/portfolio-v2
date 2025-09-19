import styled from 'styled-components';

export const CareerSection = styled.section`
  padding: 200px 0;

  border-top: 5px solid transparent;
  border-image-source: linear-gradient(90deg, #5AE0C4 0%, #317A6B 27.88%, #3B9381 58.17%, #46AD97 87.02%);
  border-image-slice: 1;

  background: linear-gradient(270.56deg, rgba(90, 224, 196, 0) 14.82%, rgba(90, 224, 196, 0.2) 99.53%),
  #0A192F;

  @media (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.text.light};
  font-family: 'Source Code Pro';
  font-weight: 500;
  font-size: 24px;
`;

export const Subtitle = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 40px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    font-size: 35px;
    margin-bottom: 50px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 89px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const MainContent = styled.div`
  flex: 1.5;
`;

export const ExperiencesList = styled.div`
  flex: 1;
`;

export const ExperiencesTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-size: 32px;
  margin-bottom: 10px;
`;
