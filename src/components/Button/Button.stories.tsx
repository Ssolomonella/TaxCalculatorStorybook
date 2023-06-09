import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'TaxCalculator/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Calculate Tax',
};
