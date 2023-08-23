import { useRouter } from 'next/router';
import React from 'react';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/Gotop';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { ToggleTheme } from '../../components/ToggleTheme';
import { SettingsStrapi } from '../../share-type/settings-strapi';
import {
  Container,
  ContentContainer,
  FooterContainer,
  HeaderContainer,
  SearchContainer,
  SearchInput,
} from './styles';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children?: React.ReactNode;
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  const router = useRouter();
  return (
    <Container>
      <ToggleTheme />

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

      <SearchContainer>
        <form action="/search/" method="GET">
          <SearchInput
            type="search"
            placeholder="Encontre posts"
            name="q"
            defaultValue={router.query.q}
          />
        </form>
      </SearchContainer>

      <ContentContainer>{children}</ContentContainer>

      <FooterContainer>
        <Footer html={settings.footerText} />
      </FooterContainer>

      <GoTop />
    </Container>
  );
};
