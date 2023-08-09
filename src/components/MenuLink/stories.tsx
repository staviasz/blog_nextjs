import { MLink } from '.';
import { theme } from '../../styles/theme';

interface ArgTypes {
  children: string;
}

export default {
  title: 'Components/MLink',
  component: MLink,
  args: {
    children: 'testing',
    link: 'https://www.google.com.br/',
  },
  argTypes: {
    text: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'ligth',
    },
  },
};

export const Template = (args: ArgTypes) => {
  return (
    <div
      style={{
        maxWidth: '320px',
        background: theme.colors.primary,
        padding: theme.spacings.small,
      }}
    >
      <MLink href="#" {...args} />
      <MLink href="#" {...args} />
      <MLink href="#" {...args} />
      <MLink href="#" {...args} />
    </div>
  );
};
