import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';
import { LinkContent } from '../LogoLink/styles';

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: ${theme.spacings.xhuge};
    width: 100%;
    max-width: ${theme.sizes.max};
    color: ${theme.colors.darkText};
    font-size: ${theme.font.sizes.small};
    margin: 0 auto;
    ${HeadingStyles} {
      margin: 0 0 calc(${theme.spacings.small} - 1rem);
    }
    ${LinkContent} {
      > img {
        max-height: 100%;
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    margin-left: ${theme.spacings.large};
    max-width: 48rem;
  `}
`;
