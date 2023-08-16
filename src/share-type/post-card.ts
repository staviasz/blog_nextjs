import { StrapiImage } from './strapi-image';

export type postCardProps = {
  id: string;
  title: string;
  cover: StrapiImage;
  excerpt: string;
  slug: string;
};
