/* eslint-disable @typescript-eslint/no-explicit-any */
import mapPosts from './mapPost';
import { mapSettings } from './mapSettings';

export const mapResponse = (response: any) => {
  const { setting, posts } = response;
  return {
    setting: mapSettings(setting),
    posts: mapPosts(posts),
  };
};
