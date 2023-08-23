import { screen } from '@testing-library/react';
import { PostCard } from '.';
import { renderTheme } from '../../styles/render-theme';

import mapPosts from '../../utils/mapData/mapPost';
import mock from './mock';

const post = mapPosts(mock)[1];
const { posts } = post;

describe('<PostCard />', () => {
  it('should render a heading, cover and excerpt', () => {
    renderTheme(<PostCard {...post} />);

    expect(
      screen.getByRole('heading', { name: posts.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: posts.title })).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: posts.title })[0],
    ).toHaveAttribute('href', `/post/${posts.slug}`);
    expect(screen.getByText(posts.excerpt)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostCard {...post} />);
    expect(container).toMatchSnapshot();
  });
});
