import styled from 'styled-components';

export const SocialMediaContainer = styled.section`
  padding: 100px 0;

  border-top: 5px solid transparent;
  border-image-source: linear-gradient(90deg, #5AE0C4 0%, #317A6B 27.88%, #3B9381 58.17%, #46AD97 87.02%);
  border-image-slice: 1;

  background-color: ${({ theme }) => theme.surface}
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.text.light};
  font-family: 'Source Code Pro';
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 50px;
`;

export const Subtitle = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 40px;
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    width: 90%;
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.secondary};
  border: none;
  margin: 30px 0;
`;

export const FooterText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.secondaryVariants.transparent05};
  text-align: center;
  line-height: 1.5;

  strong {
    font-weight: 500;
  }
`;
