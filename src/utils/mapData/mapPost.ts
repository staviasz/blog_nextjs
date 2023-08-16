/* eslint-disable @typescript-eslint/no-explicit-any */
import { MetaData } from '../../share-type/metaData';
import { postCardProps } from '../../share-type/post-card';
import mapAuthor from './mapAuthor';
import mapCategories from './mapCategories';
import mapCover from './mapCover';
import mapTags from './mapTags';

export type PostsProps = {
  posts: postCardProps[];
  createdAt: string;
  content: string;
  allowComments: boolean;
  categories: MetaData[];
  tags: MetaData[];
  author: MetaData;
};

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
      posts: {
        id,
        title,
        slug,
        cover: mapCover(cover),
        excerpt,
      },
      content,
      createdAt,
      allowComments,
      categories: mapCategories(categories),
      tags: mapTags(tags),
      author: mapAuthor(author),
    };
  });
};

export default mapPosts;
