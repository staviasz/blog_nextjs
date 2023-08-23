import Link from 'next/link';
import { PostsProps } from '../../utils/mapData/mapPost';
import { Heading } from '../Heading';
import { Container, Cover, Excerpt } from './styles';

export const PostCard = ({
  posts: { cover, excerpt, slug, title },
}: PostsProps) => {
  return (
    <Container>
      {cover !== null && (
        <Link href={`/post/${slug}`} legacyBehavior>
          <a>
            <Cover src={cover.url} alt={title} />
          </a>
        </Link>
      )}

      <Heading as="h2" size="small">
        <Link href={`/post/${slug}`} legacyBehavior>
          <a>{title}</a>
        </Link>
      </Heading>

      <Excerpt>{excerpt}</Excerpt>
    </Container>
  );
};
