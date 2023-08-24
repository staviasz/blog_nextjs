import { screen } from '@testing-library/react';
import { ArticleMeta } from '.';
import { renderTheme } from '../../styles/render-theme';

import mapPosts from '../../utils/mapData/mapPost';
import mock from './mockArticleMeta';

const posts = mapPosts(mock)[0];
const props = posts;

describe('<ArticleMeta />', () => {
  it('should render author and category links', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(screen.getByRole('link', { name: 'Patricia' })).toHaveAttribute(
      'href',
      '/author/patricia',
    );
    expect(
      screen.getByRole('link', { name: 'desenvolvimento' }),
    ).toHaveAttribute('href', '/category/desenvolvimento');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<ArticleMeta {...props} />);
    expect(container).toMatchSnapshot();
  });
});
