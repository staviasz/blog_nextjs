import { screen } from '@testing-library/react';
import { CloneMe } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<CloneMe/>', () => {
  it('should render', () => {
    renderTheme(<CloneMe>testing</CloneMe>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
