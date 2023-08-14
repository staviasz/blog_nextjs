import Link from 'next/link';
import { MenuDiv, MenuLink } from './styles';

interface MLinkProps {
  children: string | React.ReactNode;
  href: string;
  target?: '_blank' | '_self';
}
export const MLink = ({ children, href, target = '_self' }: MLinkProps) => {
  const nextLink = href.match(/^\//) ? true : false;
  if (nextLink) {
    return (
      <Link href={href} target={target} passHref>
        <MenuDiv>{children}</MenuDiv>
      </Link>
    );
  }
  return (
    <MenuLink target={target} href={href}>
      {children}
    </MenuLink>
  );
};
