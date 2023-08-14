import { screen } from '@testing-library/react';
import { PostGrid, PostGridProps } from '.';
import { renderTheme } from '../../styles/render-theme';

import mapPosts from '../../utils/mapData/mapPost';
import mock from './mock';

const postsData = mapPosts(mock);
const props: PostGridProps = {
  posts: postsData.map(({ id, title, cover, excerpt, slug }) => {
    return { id, title, cover, excerpt, slug };
  }),
};

describe('<PostGrid />', () => {
  it('should not render posts', () => {
    console.log(props);

    renderTheme(<PostGrid {...props} posts={undefined} />);

    expect(screen.getByText(/Nenhum post/i)).toBeInTheDocument();
  });

  it('should render three posts', () => {
    const { container } = renderTheme(<PostGrid {...props} />);

    expect(screen.queryByText(/Nenhum post/i)).not.toBeInTheDocument();

    expect(screen.getAllByRole('heading')).toHaveLength(2);
    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(container.querySelectorAll('p')).toHaveLength(2);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostGrid {...props} />);
    expect(container).toMatchSnapshot();
  });
});
