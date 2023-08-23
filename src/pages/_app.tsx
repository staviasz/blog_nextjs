import { BlogThemeProvider } from '@/contexts/BlogThemeContext';
import { GlobalStyles } from '@/styles/global-styles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BlogThemeProvider>
      <Component {...pageProps} />
      <GlobalStyles
        colors={{}}
        font={{}}
        media={{}}
        spacings={{}}
        sizes={{}}
        name={''}
      />
    </BlogThemeProvider>
  );
}
