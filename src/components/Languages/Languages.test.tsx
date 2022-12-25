import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Languages } from './Languages';
import { ELanguage } from './LanguagesUtils';
import '@testing-library/jest-dom';

it('renders the language flag icons', () => {
  const language = { languageState: ELanguage.English, setLanguageState: jest.fn() };

  const result = render(<Languages language={language} />);

  expect(result.container.querySelector('#english')).toBeInTheDocument();
  expect(result.container.querySelector('#swedish')).toBeInTheDocument();
  expect(result.container.querySelector('#norwegian')).toBeInTheDocument();
  expect(result.container.querySelector('#finnish')).toBeInTheDocument();
  expect(result.container.querySelector('#hungarian')).toBeInTheDocument();
  expect(result.container.querySelector('#german')).toBeInTheDocument();
  expect(result.container.querySelector('#dutch')).toBeInTheDocument();
  expect(result.container.querySelector('#afrikaans')).toBeInTheDocument();
  expect(result.container.querySelector('#russian')).toBeInTheDocument();
  expect(result.container.querySelector('#latvian')).toBeInTheDocument();
  expect(result.container.querySelector('#polish')).toBeInTheDocument();
  expect(result.container.querySelector('#french')).toBeInTheDocument();
  expect(result.container.querySelector('#spanish')).toBeInTheDocument();
});

it('clicking another flag changes the language', async () => {
  const user = userEvent.setup();
  const setLanguageState = jest.fn();
  const language = { languageState: ELanguage.English, setLanguageState };

  const result = render(<Languages language={language} />);
  const flagContainer = result.container.querySelector('#swedish');
  const flag: any = flagContainer ? flagContainer.querySelector('div') : null;

  await user.click(flag);

  expect(setLanguageState).toHaveBeenCalledWith(ELanguage.Swedish);
});
