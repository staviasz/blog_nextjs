import { PostCard } from '.';
import mapPosts, { PostsProps } from '../../utils/mapData/mapPost';

import mock from './mock';

const post = mapPosts(mock)[1];
const { posts } = post;

export default {
  title: 'Components/PostCard',
  component: PostCard,
  args: posts,
};

export const Template = (args: PostsProps) => {
  return (
    <div style={{ maxWidth: '32rem' }}>
      <PostCard {...args} />
    </div>
  );
};
