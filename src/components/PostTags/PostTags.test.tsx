import { screen } from '@testing-library/react';
import { PostTags, PostTagsProps } from '.';
import { renderTheme } from '../../styles/render-theme';

import mapPosts from '../../utils/mapData/mapPost';
import mock from './mock';

const posts = mapPosts(mock)[1];
const props: PostTagsProps = posts;

describe('<PostTags />', () => {
  it('should render two tags', () => {
    renderTheme(<PostTags {...props} />);

    expect(screen.getByText(/Tags:/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('should should match snapshot', () => {
    const { container } = renderTheme(<PostTags {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('should should match snapshot with no tags', () => {
    const { container } = renderTheme(<PostTags {...props} tags={undefined} />);

    expect(container).toMatchSnapshot();
  });
});
