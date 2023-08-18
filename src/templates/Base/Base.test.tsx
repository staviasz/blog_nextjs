import { screen } from '@testing-library/react';
import { BaseTemplate, BaseTemplateProps } from '.';
import { renderTheme } from '../../styles/render-theme';

import { mock } from './mock';

const props: BaseTemplateProps = mock;

describe('<BaseTemplate />', () => {
  it('should render base elements', () => {
    renderTheme(<BaseTemplate {...props} />);

    expect(
      screen.getByRole('img', {
        name: 'Tecnologia - tecnologia em geral',
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Open or close menu')).toBeInTheDocument();
    expect(
      screen.getByText('Projeto criado por Erick Staviasz'),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Go to top')).toBeInTheDocument();
  });

  it('should render base elements', () => {
    const { container } = renderTheme(<BaseTemplate {...props} />);
    expect(container).toMatchSnapshot();
  });
});
