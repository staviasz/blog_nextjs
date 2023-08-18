import { formatDate } from '../../utils/formatDate';
import { PostsProps } from '../../utils/mapData/mapPost';
import { randomKey } from '../../utils/randomKey';
import { Container } from './styles';

export const ArticleMeta = ({
  createdAt,
  author,
  categories = [],
}: PostsProps) => {
  return (
    <Container>
      <p>
        {typeof author !== 'undefined' && (
          <>
            <span>Por </span>
            <a href={`/author/${author.slug}`}>{author.displayName}</a>
            <span className="separator"> | </span>
          </>
        )}

        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        <span className="separator"> | </span>

        {categories.length > 0 && (
          <>
            <span className="categories">
              {categories.map((category) => {
                return (
                  <span key={`article-meta-cat-${randomKey('category')}`}>
                    <a href={`/category/${category.slug}`}>
                      {category.displayName}
                    </a>
                  </span>
                );
              })}
            </span>
          </>
        )}
      </p>
    </Container>
  );
};
