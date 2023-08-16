import { PostTags, PostTagsProps } from '.';
import mapPosts from '../../utils/mapData/mapPost';

import mock from './mock';

const tags = mapPosts(mock)[0];

export default {
  title: 'Components/PostTags',
  component: PostTags,
  args: tags,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Template = (args: PostTagsProps) => {
  return (
    <div style={{ padding: '0 2.4rem' }}>
      <PostTags {...args} />
    </div>
  );
};

export const NoTags = (args: PostTagsProps) => {
  return (
    <div style={{ padding: '0 2.4rem' }}>
      <PostTags {...args} tags={undefined} />
    </div>
  );
};
