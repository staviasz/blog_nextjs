import { request } from 'graphql-request';
import config from '../config/url-config';
import { GRAPHQL_QUERIES } from '../graphql/query';
import { PostStrapi } from '../share-type/post-strapi';
import { SettingsStrapi } from '../share-type/settings-strapi';

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
  posts: PostStrapi[];
};

export const loadPosts = async (variables: LoadPostsVariables = {}): Promise<any[]> => {
  const defaultVariables: LoadPostsVariables = {
    sort: 'createdAt:desc',
    start: 0,
    limit: 10,
  };

  try {
    const response = await request(config.graphqlURL, GRAPHQL_QUERIES, {
    ...defaultVariables,
    ...variables,
    });
    const {setting, posts} = response[0]
  } catch (e) {
    //
  }

  if (response) {
    const Settings = mapSettings(data.settings)
    const posts = mapSettings(data.posts)

  }

  return [response];
};

(async () => {
  try {
    const result = await loadPosts();
    console.log(result[0]);
  } catch (error) {
    console.error(error);
  }
})();


