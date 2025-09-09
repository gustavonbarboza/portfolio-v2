import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 32px;
  color: ${({ theme }) => theme.text.light};
`;

export const Period = styled.p`
  display: flex;
  align-items: center;
  gap: 13px;
  font-size: 15px;
  color: ${({ theme }) => theme.text.muted};
  margin-top: 15px;
  margin-bottom: 15px;

  img {
    width: 15px;
    height: 15px;
  }
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.text.light};
  line-height: 1.8;
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

export const SkillTag = styled.span`
  background-color: ${({ theme }) => theme.primaryVariants.transparentPrimary};
  color: ${({ theme }) => theme.text.light};
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 500;
`;
