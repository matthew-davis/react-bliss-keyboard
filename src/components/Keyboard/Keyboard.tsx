import React, { useEffect, useState } from 'react';
import Characters from '../../assets/characters.svg';
import Words from '../../assets/words.svg';
import { Definitions, IDefinitionKey } from '../Definitions';
import { sizeKeyboard, TOptions } from "./KeyboardUtils";
import { Keys } from '../Keys';
import { ELanguage, Languages } from '../Languages';
import { Menus, TMenuState } from '../Menus';
import { Output, TMessageState } from '../Output';
import { Search } from '../Search';
import { Translations } from '../Translations';
import './Keyboard.css';

export const Keyboard = ({ options }: TOptions) => {
  const [languageState, setLanguageState] = useState<ELanguage>(options.defaultLanguage);
  const [menuState, setMenuState] = useState<TMenuState>({ menuKey: 1000, diacriticKey: 0 });
  const [messageState, setMessageState] = useState<TMessageState>([]);
  const [hoveredKey, setHoveredKey] = useState<IDefinitionKey | undefined>(undefined);

  useEffect(() => sizeKeyboard(), []);
  window.addEventListener('resize', () => sizeKeyboard());

  return (
    <div id={'appWrapper'}>
      <img src={Characters} alt="Characters" height={0} width={0} />
      <img src={Words} alt="Words" height={0} width={0} />
      <Output messageState={messageState} />
      {options.translation && <Translations language={languageState} messageState={messageState} />}
      {options.search && (
        <Search
          language={languageState}
          numberOfResults={options.numberOfResults}
          menu={{ menuState, setMenuState }}
          setHoveredKey={setHoveredKey}
          message={{ messageState, setMessageState }}
        />
      )}
      <div className={'settingsWrapper'}>
        {options.menu && <Menus menuState={menuState} language={languageState} />}
        {options.definitions && <Definitions language={languageState} hoveredKey={hoveredKey} />}
        {options.languages && <Languages language={{ languageState, setLanguageState }} />}
      </div>
      <Keys
        language={languageState}
        menu={{ menuState, setMenuState }}
        message={{ messageState, setMessageState }}
        posColours={options.posColours}
        keyCharacters={options.keyCharacters}
        setHoveredKey={setHoveredKey}
      />
    </div>
  );
};
