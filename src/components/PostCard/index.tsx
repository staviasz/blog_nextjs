import Link from 'next/link';
import { StrapiImage } from '../../share-type/strapi-image';
import { Heading } from '../Heading';
import { Container, Cover, Excerpt } from './styles';

export type PostCardProps = {
  id: string;
  title: string;
  cover: StrapiImage;
  excerpt: string;
  slug: string;
};

export const PostCard = ({ title, cover, excerpt, slug }: PostCardProps) => {
  return (
    <Container>
      <Link href={`/post/${slug}`} legacyBehavior>
        <a>
          <Cover src={cover.url} alt={title} />
        </a>
      </Link>

      <Heading as="h2" size="small">
        <Link href={`/post/${slug}`} legacyBehavior>
          <a>{title}</a>
        </Link>
      </Heading>

      <Excerpt>{excerpt}</Excerpt>
    </Container>
  );
};
