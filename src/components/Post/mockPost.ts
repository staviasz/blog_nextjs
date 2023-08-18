import json from '../../api/data.json';
import mapPosts, { PostsProps } from '../../utils/mapData/mapPost';

const { data } = json;
const post = mapPosts(data.posts)[0];

const { posts, content, author, categories, createdAt } = post;

export default {
  posts,
  content,
  author,
  categories,
  createdAt,
} as PostsProps;
