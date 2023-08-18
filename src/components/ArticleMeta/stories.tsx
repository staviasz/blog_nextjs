import { ArticleMeta } from '.';
import mapPosts, { PostsProps } from '../../utils/mapData/mapPost';

import mock from './mockArticleMeta';

const posts = mapPosts(mock)[0];

interface ArgsProps extends PostsProps {}

export default {
  title: 'Components/ArticleMeta',
  component: ArticleMeta,
  args: posts,
  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
    },
  },
};

export const Template = (args: ArgsProps) => {
  return (
    <div>
      <ArticleMeta {...args} />
    </div>
  );
};
