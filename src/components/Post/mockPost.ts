import { PostProps } from '.';
import { data } from '../../api/data.json';
import mapPosts from '../../utils/mapData/mapPost';

const post = mapPosts(data.posts)[0];

const { title, excerpt, cover, content, author, categories, createdAt } = post;

export default {
  title,
  excerpt,
  cover,
  content,
  author,
  categories,
  createdAt,
} as PostProps;
