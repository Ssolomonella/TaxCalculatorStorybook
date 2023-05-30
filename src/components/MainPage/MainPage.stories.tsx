import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MainPage, MainPageProps } from './MainPage';

export default {
  title: 'Pages/MainPage',
  component: MainPage,
} as Meta;

const Template: Story<MainPageProps> = (args) => <MainPage {...args} />;

export const Default = Template.bind({});
