import { PostGrid, PostGridProps } from '.';
import { mapPosts } from '../../utils/mapData/mapPost';

import mock from './mock';

const postsData = mapPosts(mock);
const props: PostGridProps = { posts: postsData };

export default {
  title: 'Components/PostGrid',
  component: PostGrid,
  args: props,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Template = (args: PostGridProps) => {
  return (
    <div>
      <PostGrid {...args} />
    </div>
  );
};

export const NoPosts = () => {
  return (
    <div>
      <PostGrid />
    </div>
  );
};
