import { storiesOf } from '@storybook/react';
import React from 'react';
import { Keyboard, TOptions } from '../components/Keyboard';
import { ELanguage } from '../components/Languages';

const stories = storiesOf('Bliss Keyboard', module);

stories.add('Keyboard', () => {
  const storyOptions: TOptions = {
    translation: true,
    search: true,
    numberOfResults: 10,
    menu: true,
    definitions: true,
    languages: true,
    defaultLanguage: ELanguage.English,
    posColours: true,
    keyCharacters: true,
  };

  return <Keyboard options={storyOptions} />;
});
