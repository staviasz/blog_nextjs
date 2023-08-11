import { ArticleMeta, ArticleMetaProps } from '.';

import mock from './mockArticleMeta';

interface ArgsProps extends ArticleMetaProps {}

export default {
  title: 'Components/ArticleMeta',
  component: ArticleMeta,
  args: mock,
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
