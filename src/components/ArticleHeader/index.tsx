/* eslint-disable react/prop-types */
import { PostsProps } from '../../utils/mapData/mapPost';
import { ArticleMeta } from '../ArticleMeta';
import { Heading } from '../Heading';
import { Container, Cover, Excerpt } from './styles';

export type ArticleHeaderProps = PostsProps;

export const ArticleHeader = (props: ArticleHeaderProps) => {
  const {
    posts: { title, cover, excerpt },
  } = props;

  return (
    <Container>
      <Heading size="big" uppercase="capitalize" as="h2">
        {title}
      </Heading>
      <Excerpt>{excerpt}</Excerpt>
      {cover && <Cover src={cover.url} alt={title} />}
      <ArticleMeta {...props} />
    </Container>
  );
};
