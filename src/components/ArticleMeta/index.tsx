import { MetaData } from '../../share-type/metaData';
import { formatDate } from '../../utils/formatDate';
import { Container } from './styles';

export type ArticleMetaProps = {
  createdAt: string;
  author?: MetaData;
  categories: MetaData[];
};

export const ArticleMeta = ({
  createdAt,
  author = undefined,
  categories = [],
}: ArticleMetaProps) => {
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
                  <span key={`article-meta-cat-${category.id}`}>
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
