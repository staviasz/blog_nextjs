import { PostsProps } from '../../utils/mapData/mapPost';
import { randomKey } from '../../utils/randomKey';
import { PostCard } from '../PostCard';
import { Container, Grid, NotFound } from './styles';

export type PostGridProps = {
  posts?: PostsProps[];
};

export const PostGrid = ({ posts = [] }: PostGridProps) => {
  // console.log('index', posts);

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
