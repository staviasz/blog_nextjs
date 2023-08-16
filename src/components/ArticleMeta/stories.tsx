import { ArticleMeta, ArticleMetaProps } from '.';
import mapPosts from '../../utils/mapData/mapPost';

import mock from './mockArticleMeta';

const posts = mapPosts(mock)[0];

interface ArgsProps extends ArticleMetaProps {}

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
