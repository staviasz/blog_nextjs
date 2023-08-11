import { Meta } from '@storybook/react';
import { Header, HeaderProps } from '.';

import mock from './mockHeader';

export default {
  title: 'Components/Header',
  component: Header,
  args: mock,
} as Meta<HeaderProps>;

export const Template = (args: HeaderProps) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};
