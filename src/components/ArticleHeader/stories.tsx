import { ArticleHeader, ArticleHeaderProps } from '.';

import mock from './mockArticleHeader';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: mock,
};

export const Template = (args: ArticleHeaderProps) => {
  return (
    <div>
      <ArticleHeader {...args} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, laborum
        tempore repellendus neque est sequi quam inventore voluptate
        reprehenderit, tenetur ut, molestias sunt aut doloribus dolorum
        molestiae enim? Eligendi, molestiae!
      </p>
    </div>
  );
};
