import { PostsProps } from '../utils/mapData/mapPost';
import { MetaData } from './metaData';

export type PostStrapi = PostsProps & {
  tags: MetaData[];
  allowComments: boolean;
};
