import { PostTemplate, PostTemplateProps } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

const props: PostTemplateProps = mock;

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    query: { q: '' },
  }),
}));

describe('<PostTemplate />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<PostTemplate {...props} />);

    expect(container).toMatchSnapshot();
  });
});
