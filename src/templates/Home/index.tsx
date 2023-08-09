import { TextContent } from '@/components/Text';
import { Heading } from '../../components/Heading';
import { mock } from '../../components/Text/mockHtml';
import { Wrapper } from './styles';

export default function Index() {
  const mockTest = mock;
  return (
    <Wrapper>
      <Heading>Hello world</Heading>
      <TextContent>{mockTest}</TextContent>
    </Wrapper>
  );
}
