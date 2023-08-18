import { Post } from '../../components/Post';
import { PostTags } from '../../components/PostTags';
import { PostStrapi } from '../../share-type/post-strapi';
import { SettingsStrapi } from '../../share-type/settings-strapi';
import { BaseTemplate } from '../Base';
import { TagsContainer } from './styles';

export type PostTemplateProps = {
  settings: SettingsStrapi;
  post: PostStrapi;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <Post {...post} />

      <TagsContainer>
        <PostTags tags={post.tags} />
      </TagsContainer>
    </BaseTemplate>
  );
};
