import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.surface};
  border-radius: 20px;
  overflow: hidden;
  min-width: 500px;
  min-height: 320px;
  scroll-snap-align: center;

  @media (max-width: 768px) {
    min-width: 300px;
    min-height: 380px;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top;

  @media (max-width: 768px) {
    height: 160px;
  }
`;

export const ProjectInfo = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 20px;
    gap: 12px;
  }
`;

export const Highlight = styled.p`
  background-color: ${({ theme }) => theme.primaryVariants.transparent05};
  color: ${({ theme }) => theme.text.light};
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 15px;
  font-weight: 500;
  align-self: flex-start;

  @media (max-width: 768px) {
    padding: 4px 12px;
    font-size: 14px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.text.light};

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Details = styled.p`
  color: ${({ theme }) => theme.text.muted};
  font-size: 16px;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
