import React from 'react';
import { Collapse, collapseProps } from './Collapse';
export default {
  title: 'CostAccounting/Collapse',
  component: Collapse,
  argTypes: {
    visible: {
      type: 'boolean',
    },
  },
};
const Template = (arg: React.JSX.IntrinsicAttributes & collapseProps) => <Collapse {...arg} />;
export const Default = Template.bind({});
Default.args = {
  visible: true,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus.',
};