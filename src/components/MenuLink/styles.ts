import styled, { css } from 'styled-components';

export const MenuLink = styled.a`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.white};
    text-decoration: none;
    margin-bottom: ${theme.spacings.small};
    border-right: 0.5rem solid ${theme.colors.primary};
    transition: all 150ms ease-in-out;

    &:hover {
      border-right-color: ${theme.colors.secondary};
      color: ${theme.colors.secondary};
    }
  `}
`;

export const MenuDiv = styled.div`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.white};
    text-decoration: none;
    margin-bottom: ${theme.spacings.small};
    border-right: 0.5rem solid ${theme.colors.primary};
    transition: all 150ms ease-in-out;

    &:hover {
      border-right-color: ${theme.colors.secondary};
      color: ${theme.colors.secondary};
    }
  `}
`;
