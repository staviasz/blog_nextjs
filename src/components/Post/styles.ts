import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

interface PostContainerProps {
  size: 'max' | 'content';
}

const postContainerStyles = {
  max: (theme: Theme) => css`
    max-width: ${theme.sizes.max};
  `,
  content: (theme: Theme) => css`
    max-width: ${theme.sizes.content};
  `,
};

export const PostContainer = styled.article<PostContainerProps>`
  ${({ theme, size }) => css`
    width: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.large};
    ${postContainerStyles[size](theme)}

    @media ${theme.media.lteMedium} {
      padding: 0 calc(${theme.spacings.large} / 2);
    }
  `}
`;

export const Content = styled.div``;
