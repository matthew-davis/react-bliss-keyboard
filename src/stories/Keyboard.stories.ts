import React from 'react';
import { storiesOf } from '@storybook/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryFn } from '@storybook/addons';

import { Keyboard } from '../components/Keyboard';

// const stories = storiesOf('App Test', module);

// stories.add('App', () => {
//   return (<Keyboard />);
// });

export default {
  title: 'Keyboard',
  component: Keyboard,
} as ComponentMeta<typeof Keyboard>;

export const Primary: () => boolean = () => {
  return (<Keyboard />);
};
