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
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top;
`;

export const ProjectInfo = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-grow: 1;
`;

export const Highlight = styled.p`
  background-color: ${({ theme }) => theme.primaryVariants.transparent05};
  color: ${({ theme }) => theme.text.light};
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 15px;
  font-weight: 500;
  align-self: flex-start;
`;

export const Title = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.text.light};
`;

export const Details = styled.p`
  color: ${({ theme }) => theme.text.muted};
  font-size: 16px;
  flex-grow: 1;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: auto;
`;
