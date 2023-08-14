import { screen } from '@testing-library/react';
import { PostCard, PostCardProps } from '.';
import { renderTheme } from '../../styles/render-theme';

import mapPosts from '../../utils/mapData/mapPost';
import mock from './mock';

const post = mapPosts(mock)[0];

const props: PostCardProps = post;

describe('<PostCard />', () => {
  it('should render a heading, cover and excerpt', () => {
    renderTheme(<PostCard {...props} />);

    expect(
      screen.getByRole('heading', { name: post.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: post.title })).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: post.title })[0],
    ).toHaveAttribute('href', `/post/${post.slug}`);
    expect(screen.getByText(post.excerpt)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
