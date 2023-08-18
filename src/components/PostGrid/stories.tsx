import { PostGrid, PostGridProps } from '.';
import { mapPostsCard } from '../../utils/mapData/mapPostCard';

import mock from './mock';

const postsData = mapPostsCard(mock);
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
