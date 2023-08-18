import { PostCard, PostCardProps } from '../components/PostCard';
import mock from '../components/PostCard/mock';
import { mapPosts } from '../utils/mapData/mapPost';

const post = mapPosts(mock)[1];
const { posts } = post;
const props: PostCardProps = posts;

export default function Index() {
  return <PostCard {...props} />;
}
