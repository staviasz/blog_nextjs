import { PostCard, PostCardProps } from '.';
import mapPosts from '../../utils/mapData/mapPost';

import mock from './mock';

const post = mapPosts(mock)[0];

export default {
  title: 'PostCard',
  component: PostCard,
  args: post,
};

export const Template = (args: PostCardProps) => {
  return (
    <div style={{ maxWidth: '32rem' }}>
      <PostCard {...args} />
    </div>
  );
};
