import { DiscussionEmbed } from 'disqus-react';
import { Container } from './styles';

export type CommentsProps = {
  id: string;
  slug: string;
  title: string;
  allowComments: boolean;
};

export const Comments = ({ id, slug, title, allowComments }: CommentsProps) => {
  if (!allowComments) return null;

  const config = {
    url: `http://localhost:1337/api/posts/${slug}/`,
    identifier: id,
    title: title,
    language: 'pt_BR',
  };

  return (
    <Container>
      <DiscussionEmbed shortname="blog-erick-staviasz" config={config} />
    </Container>
  );
};
