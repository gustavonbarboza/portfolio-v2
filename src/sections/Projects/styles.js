import styled from 'styled-components';

export const ProjectsSection = styled.section`
// Criei esse componente só para receber o ID
`;

export const CarouselWrapper = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 20px;
  border-radius: 20px;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.secondaryVariants.transparent02};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primary};
    border-radius: 4px;
    border: 2px solid transparent;
  }
`;
export const ProjectsContainer = styled.div`
  margin: 100px 0;
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
  margin-bottom: 50px;
`;
