import { ArticleHeaderProps } from '.';
import { data } from '../../api/data.json';
import mapPosts from '../../utils/mapData/mapPost';

const post = mapPosts(data.posts)[0];

const { id, title, excerpt, cover, author, categories, createdAt } = post;

export default {
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
} as ArticleHeaderProps;
