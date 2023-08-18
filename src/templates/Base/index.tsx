import React from 'react';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/Gotop';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { SettingsStrapi } from '../../share-type/settings-strapi';
import {
  Container,
  ContentContainer,
  FooterContainer,
  HeaderContainer,
} from './styles';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children?: React.ReactNode;
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  return (
    <Container>
      <Menu
        links={settings.menuLink}
        blogName={settings.blogName}
        logo={settings.cover.url}
      />

      <HeaderContainer>
        <Header
          blogName={settings.blogName}
          blogDescription={settings.blogDescription}
          logo={settings.cover.url}
        />
      </HeaderContainer>

      <ContentContainer>{children}</ContentContainer>

      <FooterContainer>
        <Footer html={settings.footerText} />
      </FooterContainer>

      <GoTop />
    </Container>
  );
};
