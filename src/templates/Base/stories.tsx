import { BaseTemplate, BaseTemplateProps } from '.';

import { mock } from './mock';

export default {
  title: 'BaseTemplate',
  component: BaseTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Template = (args: BaseTemplateProps) => {
  return (
    <div>
      {console.log(args)}
      <BaseTemplate {...args} />
    </div>
  );
};
