import { CloneMe } from '.';

interface ArgTypes {
  children: string;
}

export default {
  title: 'Components/CloneMe',
  component: CloneMe,
  args: {
    html: 'Projeto executado por <b>Erick staviasz</b> no curso de react de Otavio Miranda',
  },
};

export const Template = (args: ArgTypes) => {
  return (
    <div>
      <CloneMe {...args} />
    </div>
  );
};
