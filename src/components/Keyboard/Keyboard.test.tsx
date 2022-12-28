import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Keyboard } from './Keyboard';
import { KeyboardOptions } from './KeyboardUtils';
import { ELanguage } from '../Languages';
import '@testing-library/jest-dom';

it("renders app with all of it's components", () => {
  const testOptions: KeyboardOptions = {
    output: true,
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

  const result = render(<Keyboard {...testOptions} />);
  const output = result.container.querySelector('#outputWrapper');
  const translations = result.container.querySelector('#translationsWrapper');
  const search = result.container.querySelector('#searchWrapper');
  const menus = result.container.querySelector('#menuWrapper');
  const definitions = result.container.querySelector('#definitionsWrapper');
  const languages = result.container.querySelector('#languagesWrapper');
  const keys = result.container.querySelector('#keysWrapper');

  expect(output).toBeInTheDocument();
  expect(translations).toBeInTheDocument();
  expect(search).toBeInTheDocument();
  expect(menus).toBeInTheDocument();
  expect(definitions).toBeInTheDocument();
  expect(languages).toBeInTheDocument();
  expect(keys).toBeInTheDocument();
});
