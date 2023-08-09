import { TextContent } from '../Text';
import { FooterContainer } from './styles';

interface FooterProps {
  html: string;
}
export const Footer = ({ html }: FooterProps) => {
  return (
    <FooterContainer>
      <TextContent>{html}</TextContent>
    </FooterContainer>
  );
};
