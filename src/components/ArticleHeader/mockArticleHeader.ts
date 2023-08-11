import { ArticleHeaderProps } from '.';
import { data } from '../../api/data.json';
import { authorClean } from '../../utils/mapData/mapAuthor';
import { categoriesClean } from '../../utils/mapData/mapCategories';
import { coverClean } from '../../utils/mapData/mapCover';

const { posts } = data;
const {
  id,
  attributes: {
    title,
    excerpt,
    cover: coverData,
    author: authorData,
    categories: categoriesData,
    createdAt,
  },
} = posts.data[0];

const categories = categoriesClean(categoriesData.data);
const author = authorClean(authorData);
const cover = coverClean(coverData);

export default {
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
} as ArticleHeaderProps;
