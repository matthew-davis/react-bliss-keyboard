import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Keys } from './Keys';
import { ELanguage } from '../Languages';
import '@testing-library/jest-dom';

const user = userEvent.setup();
const language = ELanguage.English;
const menuState = { menuKey: 1000, diacriticKey: 0 };
const setMenuState = jest.fn();
const messageState = [{ menuKey: 15214, diacriticKey: 3333 }];
const setMessageState = jest.fn();
const posColours = true;
const keyCharacters = true;
const setHoveredKey = jest.fn();

it('renders the output with key characters and pos colours', () => {
  const result = render(
    <Keys
      language={language}
      menu={{ menuState, setMenuState }}
      message={{ messageState, setMessageState }}
      posColours={posColours}
      keyCharacters={keyCharacters}
      setHoveredKey={setHoveredKey}
    />,
  );

  const pos = result.container.querySelector('.key--pos');

  expect(screen.getByText('A')).toBeInTheDocument();
  expect(pos).toBeInTheDocument();
});

it('renders the output without key characters and pos colours', () => {
  const posColours = false;
  const keyCharacters = false;

  const result = render(
    <Keys
      language={language}
      menu={{ menuState, setMenuState }}
      message={{ messageState, setMessageState }}
      posColours={posColours}
      keyCharacters={keyCharacters}
      setHoveredKey={setHoveredKey}
    />,
  );

  const pos = result.container.querySelector('.key--pos');

  expect(screen.queryByText('A')).not.toBeInTheDocument();
  expect(pos).not.toBeInTheDocument();
});

it('characters can be selected', async () => {
  render(
    <Keys
      language={language}
      menu={{ menuState, setMenuState }}
      message={{ messageState, setMessageState }}
      posColours={posColours}
      keyCharacters={keyCharacters}
      setHoveredKey={setHoveredKey}
    />,
  );

  await user.click(screen.getByText('Q'));
  expect(setMenuState).toHaveBeenCalled();
});
