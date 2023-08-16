import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
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

import { Cancel } from '@styled-icons/material-outlined/Cancel';
import { CheckCircleOutline } from '@styled-icons/material-outlined/CheckCircleOutline';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router?.query?.q || '');
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [isReady, setIsReady] = useState(true);
  const inputTimeout = useRef(null);

  useEffect(() => {
    if (isReady) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }, [isReady]);

  useEffect(() => {
    clearTimeout(inputTimeout.current);

    if (router?.query?.q === searchValue) {
      return;
    }

    const q = searchValue;

    if (!q || q.length < 3) {
      return;
    }

    inputTimeout.current = setTimeout(() => {
      setIsReady(false);
      router
        .push({
          pathname: '/search/',
          query: { q: searchValue },
        })
        .then(() => setIsReady(true));
    }, 600);

    return () => clearTimeout(inputTimeout.current);
  }, [searchValue, router]);

  return (
    <Container>
      <ToggleTheme />

      <Menu
        links={settings.menuLink}
        blogName={settings.blogName}
        logo={settings.logo.url}
      />

      <HeaderContainer>
        <Header
          blogName={settings.blogName}
          blogDescription={settings.blogDescription}
          logo={settings.logo.url}
        />
      </HeaderContainer>

      <SearchContainer>
        <SearchInput
          type="search"
          placeholder="Encontre posts"
          name="q"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          disabled={searchDisabled}
        />
        {searchDisabled ? (
          <Cancel className="search-cancel-icon" aria-label="Input Disabled" />
        ) : (
          <CheckCircleOutline
            className="search-ok-icon"
            aria-label="Input enabled"
          />
        )}
      </SearchContainer>

      <ContentContainer>{children}</ContentContainer>

      <FooterContainer>
        <Footer html={settings.text} />
      </FooterContainer>

      <GoTop />
    </Container>
  );
};
