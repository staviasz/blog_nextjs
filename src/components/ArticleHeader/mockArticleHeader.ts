import json from '../../api/data.json';
import mapPosts, { PostsProps } from '../../utils/mapData/mapPost';

const { data } = json;
const post = mapPosts(data.posts)[1];

const { posts, categories, author, createdAt } = post;
const { id, title, excerpt, cover } = posts;

export default {
  posts: { id, title, excerpt, cover },
  author,
  categories,
  createdAt,
} as PostsProps;

// id, title, excerpt, cover, , ,
