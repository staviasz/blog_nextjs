import { PostsProps } from '../../utils/mapData/mapPost';
import { ArticleHeader } from '../ArticleHeader';
import { TextContent } from '../Text';
import { PostContainer } from './styles';

export type Props = PostsProps;
export const Post = (props: Props) => {
  return (
    <>
      <PostContainer size="max">
        <ArticleHeader {...props} />
      </PostContainer>
      <PostContainer size="content">
        <TextContent>{props.content}</TextContent>
      </PostContainer>
    </>
  );
};
