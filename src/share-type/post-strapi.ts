import { PostProps } from '../components/Post';
import { MetaData } from './metaData';

export type PostStrapi = PostProps & {
  tags: MetaData[];
  slug: string;
  allowComments: boolean;
};
