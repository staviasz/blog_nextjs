import { useEffect, useState } from 'react';
import { LoadPostsVariables, loadPosts } from '../../api/load-posts';
import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from '../../share-type/post-strapi';
import { SettingsStrapi } from '../../share-type/settingsStrapi';
import { BaseTemplate } from '../Base';
import { Button, ButtonContainer } from './styles';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
  variables?: LoadPostsVariables;
};

export const PostsTemplate = ({
  settings,
  posts = [],
  variables,
}: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  useEffect(() => {
    setStatePosts(posts);
    setNoMorePosts(false);
    setButtonDisabled(false);
    setStateVariables(variables);
  }, [posts, variables]);

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);

    const newVariables = {
      ...stateVariables,
      start: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit,
    };

    const morePosts = await loadPosts(newVariables);

    if (!morePosts || !morePosts.posts || !morePosts.posts.length) {
      setNoMorePosts(true);
      return;
    }

    setButtonDisabled(false);
    setStateVariables(newVariables);
    setStatePosts((p) => [...p, ...morePosts.posts]);
  };

  return (
    <BaseTemplate settings={settings}>
      <PostGrid posts={statePosts} />

      {statePosts && statePosts.length ? (
        <ButtonContainer>
          <Button onClick={handleLoadMorePosts} disabled={buttonDisabled}>
            {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
          </Button>
        </ButtonContainer>
      ) : null}
    </BaseTemplate>
  );
};
