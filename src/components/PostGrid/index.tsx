import { PostCard, PostCardProps } from '../PostCard';
import { Container, Grid, NotFound } from './styles';

export type PostGridProps = {
  posts?: PostCardProps[];
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
            <PostCard key={`post-card-${post.id}`} {...post} />
          ))}
      </Grid>
    </Container>
  );
};
