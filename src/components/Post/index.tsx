import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { TextContent } from '../Text';
import { PostContainer } from './styles';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
  title,
  author,
  categories,
  content,
  cover,
  createdAt,
  excerpt,
  id,
}: PostProps) => {
  return (
    <>
      <PostContainer size="max">
        <ArticleHeader
          author={author}
          categories={categories}
          title={title}
          excerpt={excerpt}
          id={id}
          cover={cover}
          createdAt={createdAt}
        />
      </PostContainer>
      <PostContainer size="content">
        <TextContent>{content}</TextContent>
      </PostContainer>
    </>
  );
};
