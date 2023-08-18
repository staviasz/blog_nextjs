import { postCardProps } from '../../share-type/post-card';
import { randomKey } from '../../utils/randomKey';
import { PostCard } from '../PostCard';
import { Container, Grid, NotFound } from './styles';

export type PostGridProps = {
  posts?: postCardProps[];
};

export const PostGrid = ({ posts = [] }: PostGridProps) => {
  return (
    <Container>
      {posts.length === 0 && (
        <NotFound>Nenhum post encontrado aqui =( </NotFound>
      )}
      <Grid>
        {posts.length > 0 &&
          posts.map((post) => (
            <PostCard key={`post-card-${randomKey('post')}`} {...post} />
          ))}
      </Grid>
    </Container>
  );
};
