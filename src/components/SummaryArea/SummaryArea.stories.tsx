import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SummaryArea, SummaryAreaProps } from './SummaryArea';

// eslint-disable-next-line storybook/default-exports
export default {
  title: 'TaxCalculator/SummaryArea',
  component: SummaryArea,
} as Meta;

const Template: Story<SummaryAreaProps> = (args) => <SummaryArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Your Tax Liability Is:',
};
