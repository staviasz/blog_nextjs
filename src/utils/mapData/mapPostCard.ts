/* eslint-disable @typescript-eslint/no-explicit-any */
import { postCardProps } from '../../share-type/post-card';
import mapCover from './mapCover';

export interface mapPostsCardProps {
  posts: postCardProps[];
}

export const mapPostsCard = (postData: any): mapPostsCardProps => {
  const { data } = postData;
  return data.map((item: any) => {
    const {
      id,
      attributes: { title = '', slug = '', excerpt = '', cover = [] },
    } = item;
    return {
      id,
      title,
      slug,
      cover: mapCover(cover),
      excerpt,
    };
  });
};
