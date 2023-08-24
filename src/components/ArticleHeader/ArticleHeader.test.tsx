import { screen } from '@testing-library/react';
import { ArticleHeader, ArticleHeaderProps } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mockArticleHeader';

const props: ArticleHeaderProps = mock;
const { posts } = props;

describe('<ArticleHeader />', () => {
  it('should render heading, excerpt, cover img and meta', () => {
    const { container } = renderTheme(<ArticleHeader {...props} />);

    expect(
      screen.getByRole('heading', { name: posts.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: posts.title })).toBeInTheDocument();
    expect(screen.getByText(posts.excerpt)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
