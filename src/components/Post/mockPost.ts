import { PostProps } from '.';
import { data } from '../../api/data.json';
import { authorClean } from '../../utils/mapData/mapAuthor';
import { categoriesClean } from '../../utils/mapData/mapCategories';
import { coverClean } from '../../utils/mapData/mapCover';

const { posts } = data;

const {
  attributes: {
    title,
    excerpt,
    cover: dataCover,
    content,
    author: dataAuthor,
    categories: dataCategories,
    createdAt,
  },
} = posts.data[0];

const cover = coverClean(dataCover);
const author = authorClean(dataAuthor);
const categories = categoriesClean(dataCategories.data);

export default {
  title,
  excerpt,
  cover,
  content,
  author,
  categories,
  createdAt,
} as PostProps;
