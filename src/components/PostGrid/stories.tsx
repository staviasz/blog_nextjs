import { PostGrid, PostGridProps } from '.';
import mapPosts from '../../utils/mapData/mapPost';

import mock from './mock';

const posts = mapPosts(mock);

export default {
  title: 'PostGrid',
  component: PostGrid,
  args: {
    posts: posts.map(({ id, title, cover, excerpt, slug }) => {
      return { id, title, cover, excerpt, slug };
    }),
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Template = (args: PostGridProps) => {
  return (
    <div>
      {/* {console.log('aqui', args)} */}

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
