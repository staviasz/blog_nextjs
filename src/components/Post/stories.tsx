import { Post, Props } from '.';

import mock from './mockPost';

export default {
  title: 'Components/Post',
  component: Post,
  args: mock,
};

export const Template = (args: Props) => {
  return (
    <div>
      <Post {...args} />
    </div>
  );
};
