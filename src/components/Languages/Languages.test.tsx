import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Languages } from './Languages';
import { ELanguage } from './LanguagesUtils';
import '@testing-library/jest-dom';

it('renders the language flag icons', () => {
  const language = { languageState: ELanguage.English, setLanguageState: jest.fn() };

  render(<Languages language={language} />);

  expect(screen.getByAltText('English')).toBeInTheDocument();
  expect(screen.getByAltText('Swedish')).toBeInTheDocument();
  expect(screen.getByAltText('Norwegian')).toBeInTheDocument();
  expect(screen.getByAltText('Finnish')).toBeInTheDocument();
  expect(screen.getByAltText('Hungarian')).toBeInTheDocument();
  expect(screen.getByAltText('German')).toBeInTheDocument();
  expect(screen.getByAltText('Dutch')).toBeInTheDocument();
  expect(screen.getByAltText('Afrikaans')).toBeInTheDocument();
  expect(screen.getByAltText('Russian')).toBeInTheDocument();
  expect(screen.getByAltText('Latvian')).toBeInTheDocument();
  expect(screen.getByAltText('Polish')).toBeInTheDocument();
  expect(screen.getByAltText('French')).toBeInTheDocument();
  expect(screen.getByAltText('Spanish')).toBeInTheDocument();
});

it('clicking another flag changes the language', async () => {
  const user = userEvent.setup();
  const setLanguageState = jest.fn();
  const language = { languageState: ELanguage.English, setLanguageState };

  render(<Languages language={language} />);
  await user.click(screen.getByAltText('Swedish'));

  expect(setLanguageState).toHaveBeenCalledWith(ELanguage.Swedish);
});
