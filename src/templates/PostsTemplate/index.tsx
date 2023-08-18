import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from '../../share-type/post-strapi';
import { SettingsStrapi } from '../../share-type/settings-strapi';
import { BaseTemplate } from '../Base';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
};

export const PostsTemplate = ({ settings, posts = [] }: PostsTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <PostGrid posts={posts} />
    </BaseTemplate>
  );
};
