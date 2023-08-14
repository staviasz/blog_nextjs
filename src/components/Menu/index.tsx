import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import React, { useState } from 'react';
import { LogoLink } from '../LogoLink';
import { MLink } from '../MenuLink';
import { Container, Logo, Nav, OpenClose } from './styles';

export type MenuPropsLinks = {
  id: string;
  link: string;
  newTab?: boolean;
  text: string;
};

export type MenuProps = {
  links: MenuPropsLinks[];
  blogName: string;
  logo: string;
};

export const Menu = ({ links = [], blogName, logo }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const target = links[0].newTab ? '_blank' : '_self';

  const handleOpenCloseMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuVisible((v) => !v);
  };

  return (
    <>
      <OpenClose
        menuVisible={menuVisible}
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
        onClick={handleOpenCloseMenu}
      >
        {menuVisible && <CloseIcon aria-label="Close menu" />}
        {!menuVisible && <MenuIcon aria-label="Open menu" />}
      </OpenClose>

      <Container menuVisible={menuVisible} aria-hidden={!menuVisible}>
        <Nav>
          <Logo>
            <LogoLink link="/" text={blogName} srcImage={logo} />
          </Logo>

          {links.map((link) => (
            <MLink key={link.id} href={link.link} target={target}>
              {link.text}
            </MLink>
          ))}
        </Nav>
      </Container>
    </>
  );
};
