import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { Title as HeadingStyles } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      margin: calc(${theme.spacings.small} - 0.6rem) 0;
      /* margin-top: calc(${theme.spacings.small} - 0.6rem);
      margin-bottom: ${theme.spacings.small}; */
    }

    a {
      text-decoration: none;
      color: inherit;
      transition: all 300ms ease-in-out;
    }

    &:hover a {
      color: ${theme.colors.secondary};
    }

    &:hover img {
      opacity: 0.8;
    }
  `}
`;

export const Cover = styled.img`
  max-width: calc(${theme.spacings.xlarge} * 10);
  width: 100%;
  max-height: calc(${theme.spacings.xxsmall} * 11);
  height: 100%;
  transition: opacity 300ms ease-in-out;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const Excerpt = styled.p`
  margin: 0;
`;
