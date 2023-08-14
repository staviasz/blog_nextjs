/* eslint-disable @typescript-eslint/no-explicit-any */
import { MetaData } from '../../share-type/metaData';
import { StrapiImage } from '../../share-type/strapi-image';
import mapAuthor from './mapAuthor';
import mapCategories from './mapCategories';
import mapCover from './mapCover';
import mapTags from './mapTags';

interface PostsProps {
  id: string;
  createdAt: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  allowComments: boolean;
  cover: StrapiImage;
  categories: MetaData[];
  tags: MetaData[];
  author: MetaData;
}

const mapPosts = (postData: any): PostsProps[] => {
  const { data } = postData;
  return data.map((item: any) => {
    const {
      id,
      attributes: {
        createdAt = '',
        title = '',
        slug = '',
        excerpt = '',
        content = '',
        allowComments = false,
        cover,
        categories,
        tags,
        author,
      },
    } = item;
    return {
      id,
      createdAt,
      title,
      slug,
      excerpt,
      content,
      allowComments,
      cover: mapCover(cover),
      categories: mapCategories(categories),
      tags: mapTags(tags),
      author: mapAuthor(author),
    };
  });
};

export default mapPosts;
