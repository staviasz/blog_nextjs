import { PostsTemplate, PostsTemplateProps } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

const props: PostsTemplateProps = mock;

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    query: { q: '' },
  }),
}));

describe('<PostsTemplate />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<PostsTemplate {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot without posts', () => {
    const { container } = renderTheme(
      <PostsTemplate {...props} posts={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
