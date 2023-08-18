import { PostsTemplateProps } from '.';
import json from '../../api/data.json';
import mapPosts from '../../utils/mapData/mapPost';
import { mapSettings } from '../../utils/mapData/mapSettings';

const { data } = json;
export default {
  settings: mapSettings(data.setting),
  posts: mapPosts(data.posts),
} as PostsTemplateProps;
