import { PostsTemplate, PostsTemplateProps } from '.';

import mock from './mock';

export default {
  title: 'PostsTemplate',
  component: PostsTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Template = (args: PostsTemplateProps) => {
  return (
    <div>
      <PostsTemplate {...args} />
    </div>
  );
};
