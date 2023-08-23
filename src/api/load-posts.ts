/* eslint-disable @typescript-eslint/no-unused-vars */
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
  variables?: LoadPostsVariables;
};

export const defaultLoadPostsVariables: LoadPostsVariables = {
  sort: 'createdAt:desc',
  start: 0,
  limit: 2,
};

export const loadPosts = async (
  variables: LoadPostsVariables = {},
): Promise<StrapiPostAndSettings> => {
  const response = await request(config.graphqlURL, GRAPHQL_QUERIES, {
    ...defaultLoadPostsVariables,
    ...variables,
  });

  const data = mapResponse(response);
  return data;
};
