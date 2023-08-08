import { Wrapper } from './styles';

interface Props {
  children: string;
}

export const CloneMe = ({ children = 'hello world' }: Props) => {
  return (
    <Wrapper>
      <h1>{children}</h1>
    </Wrapper>
  );
};
