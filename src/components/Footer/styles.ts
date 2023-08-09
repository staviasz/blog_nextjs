import styled, { css } from 'styled-components';
import { Text } from '../Text/styles';

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    ${Text} {
      font-size: ${theme.font.sizes.small};
      text-align: center;
      margin: 0;
    }
    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.font.sizes.small};
    }
  `}
`;
