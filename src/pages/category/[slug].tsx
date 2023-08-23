import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import {
  StrapiPostAndSettings,
  defaultLoadPostsVariables,
  loadPosts,
} from '../../api/load-posts';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function CategoryPage({
  posts,
  setting,
  variables,
}: StrapiPostAndSettings) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Head>
        <title>
          Author: {posts[0].categories[0].displayName} - {setting.blogName}
        </title>
      </Head>

      <PostsTemplate posts={posts} settings={setting} variables={variables} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async (
  ctx,
) => {
  if (!ctx.params)
    return {
      notFound: true,
    };

  let data = null;
  const variables = { authorSlug: ctx.params.slug as string };

  try {
    if (ctx.params) {
      data = await loadPosts({ categorySlug: ctx.params.slug as string });
    }
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: {
        ...defaultLoadPostsVariables,
        ...variables,
      },
    },
    revalidate: 24 * 60 * 60,
  };
};
