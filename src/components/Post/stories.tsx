import { Post, PostProps } from '.';

import mock from './mockPost';

export default {
  title: 'Components/Post',
  component: Post,
  args: mock,
};

export const Template = (args: PostProps) => {
  return (
    <div>
      <Post {...args} />
    </div>
  );
};
