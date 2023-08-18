import Link from 'next/link';
import { MetaData } from '../../share-type/metaData';
import { randomKey } from '../../utils/randomKey';
import { Container } from './styles';

export type PostTagsProps = {
  tags?: MetaData[];
};

export const PostTags = ({ tags = [] }: PostTagsProps) => {
  if (tags.length === 0) {
    return null;
  }

  return (
    <Container>
      tags:
      {tags.map((tag) => {
        return (
          <span key={randomKey(tag.slug)}>
            <Link href={`/tag/${tag.slug}`} legacyBehavior>
              <a>{tag.displayName}</a>
            </Link>
          </span>
        );
      })}
    </Container>
  );
};
