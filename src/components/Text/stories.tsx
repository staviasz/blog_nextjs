import { TextContent } from '.';
import { mock } from './mockHtml';

interface ArgTypes {
  children: string;
}

export default {
  title: 'Components/TextContent',
  component: TextContent,
  args: {
    children: mock,
  },
};

export const Template = (args: ArgTypes) => {
  return (
    <div>
      <TextContent {...args} />
    </div>
  );
};
