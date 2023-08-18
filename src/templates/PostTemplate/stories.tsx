import { PostTemplate, PostTemplateProps } from '.';

import mock from './mock';

export default {
  title: 'PostTemplate',
  component: PostTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Template = (args: PostTemplateProps) => {
  return (
    <div>
      <PostTemplate {...args} />
    </div>
  );
};
