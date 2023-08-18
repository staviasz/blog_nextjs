import { request } from 'graphql-request';
import config from '../config/url-config';
import { GRAPHQL_QUERIES } from '../graphql/query';
import { SettingsStrapi } from '../share-type/settings-strapi';
import { PostsProps } from '../utils/mapData/mapPost';
import { mapResponse } from '../utils/mapData/mapResponse';

export type LoadPostsVariables = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  sort?: string;
  start?: number;
  limit?: number;
};

export type StrapiPostAndSettings = {
  setting: SettingsStrapi;
  posts: PostsProps[];
};

export const loadPosts = async (
  variables: LoadPostsVariables = {},
): Promise<StrapiPostAndSettings> => {
  const defaultVariables: LoadPostsVariables = {
    sort: 'createdAt:desc',
    start: 0,
    limit: 10,
  };

  const response = await request(config.graphqlURL, GRAPHQL_QUERIES, {
    ...defaultVariables,
    ...variables,
  });

  const data = mapResponse(response);
  return data;
};

(async () => {
  try {
    const result = await loadPosts();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();
