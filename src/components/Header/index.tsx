import { Heading } from '../Heading';
import { LogoLink } from '../LogoLink';
import { Container, Content } from './styles';

export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  logo: string;
  showText?: boolean;
};

export const Header = ({
  blogName,
  blogDescription,
  logo,
  showText = true,
}: HeaderProps) => {
  return (
    <Container>
      <LogoLink
        link="/"
        srcImage={logo}
        text={`${blogName} - ${blogDescription}`}
      />

      {showText && (
        <Content>
          <Heading size="small" as="h1" colordark="dark">
            {blogName}
          </Heading>
          <p>{blogDescription}</p>
        </Content>
      )}
    </Container>
  );
};
