import React from 'react';
import { storiesOf } from '@storybook/react';

import { Keyboard } from '../components/Keyboard';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
  return (<Keyboard />);
});
