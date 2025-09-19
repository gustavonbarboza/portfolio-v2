// Esse componente é apenas para adicionar o padding em todas as seções

import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 10%;

   @media (max-width: 768px) {
    padding: 0 30px;
  }
`;
