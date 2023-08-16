import { Comments } from '../../components/Comments';
import { Post } from '../../components/Post';
import { PostTags } from '../../components/PostTags';
import { PostStrapi } from '../../share-type/post-strapi';
import { SettingsStrapi } from '../../share-type/settingsStrapi';
import { BaseTemplate } from '../Base';
import * as Styled from './styles';

export type PostTemplateProps = {
  settings: SettingsStrapi;
  post: PostStrapi;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <Post {...post} />

      <Styled.TagsContainer>
        <PostTags tags={post.tags} />
      </Styled.TagsContainer>

      <Comments
        title={post.title}
        slug={post.slug}
        id={post.id}
        allowComments={post.allowComments}
      />
    </BaseTemplate>
  );
};
