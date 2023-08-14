/* eslint-disable @typescript-eslint/no-explicit-any */
import mapAuthor from './mapAuthor';
import mapCategories from './mapCategories';
import mapCover from './mapCover';
import mapTags from './mapTags';

const mapPosts = (postData: any) => {
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
