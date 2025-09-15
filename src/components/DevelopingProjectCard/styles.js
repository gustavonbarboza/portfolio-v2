import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ $backgroundImage }) => $backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(20px);
    opacity: 0.2;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  gap: 50px;
  margin: 250px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProjectDetails = styled.div`
  flex: 1;
`;

export const Highlight = styled.div`
  display: flex;

  p {
    background-color: ${({ theme }) => theme.primaryVariants.transparent05};
    color: ${({ theme }) => theme.text.light};
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.text.light};
  font-size: 40px;
  margin-top: 30px;
`;

export const Details = styled.p`
  color: ${({ theme }) => theme.text.muted};
  font-size: 20px;
  margin-top: 30px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

export const ImageGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  grid-auto-rows: 164px;
  align-self: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
`;

export const ImageWrapper = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 10px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
