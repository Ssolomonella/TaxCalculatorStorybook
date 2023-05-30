import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Dropdown, DropdownProps } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args: DropdownProps) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: ['Income Tax', 'Property Tax'],
  placeholder: 'Select Tax Type',
};
