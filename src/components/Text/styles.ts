import styled, { css } from 'styled-components';

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    text-align: left;

    p {
      margin: ${theme.spacings.xlarge} 0;
    }

    a {
      color: ${theme.colors.secondary};
    }

    a:hover {
      filter: brightness(50%);
    }

    pre {
      background-color: ${theme.colors.primary};
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: ${theme.colors.white};
    }

    img {
      max-width: 100%;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`;
