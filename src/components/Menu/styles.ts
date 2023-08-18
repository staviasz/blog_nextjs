import styled, { css, DefaultTheme } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

type MenuBehaviorProps = {
  $menuvisible: string;
};

const ContainerChanger = (
  menuvisible: MenuBehaviorProps['$menuvisible'],
  theme: DefaultTheme,
) => css`
  left: ${menuvisible === 'open' ? '0' : '-30rem'};
  overflow-y: ${menuvisible === 'open' ? 'auto' : 'hidden'};

  @media ${theme.media.lteMedium} {
    left: ${menuvisible === 'open' ? '0' : '-32rem'};
  }
`;

export const Container = styled.div<MenuBehaviorProps>`
  ${({ theme, $menuvisible }) => css`
    background: ${theme.colors.primary};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    top: 0;
    left: 0;
    transition: all 300ms ease-in-out;
    overflow-y: auto;
    ${ContainerChanger($menuvisible, theme)}

    img {
      width: calc(${theme.spacings.xhuge} * 3);
      height: calc(${theme.spacings.xhuge} * 3);
      border-radius: 50%;
    }
  `}
`;

export const Nav = styled.nav`
  margin: auto;
  width: 100%;
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: ${theme.spacings.xxlarge};

      img {
        border: 0.5rem solid ${theme.colors.secondary};
      }
    }
  `}
`;

const buttonChanger = (
  menuvisible: MenuBehaviorProps['$menuvisible'],
  theme: DefaultTheme,
) => css`
  left: ${menuvisible ? '26rem' : '1rem'};
  color: ${menuvisible ? theme.colors.secondary : theme.colors.white};

  @media ${theme.media.lteMedium} {
    left: ${menuvisible ? '26rem' : '-0.5rem'};
  }
`;

export const OpenClose = styled.a<MenuBehaviorProps>`
  ${({ theme, $menuvisible }) => css`
    position: fixed;
    top: ${theme.spacings.medium};
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    z-index: 2;
    width: 3rem;
    height: 3rem;
    left: 26rem;
    transition: all 300ms ease-in-out;
    ${buttonChanger($menuvisible, theme)}
  `}
`;
