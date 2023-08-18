import Link from 'next/link';
import { MenuDiv, MenuLink } from './styles';

interface MLinkProps {
  children: string | React.ReactNode;
  href: string;
  newTab?: boolean | string;
}
export const MLink = ({ children, href, newTab }: MLinkProps) => {
  const target = newTab ? '_blank' : '_self';
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
