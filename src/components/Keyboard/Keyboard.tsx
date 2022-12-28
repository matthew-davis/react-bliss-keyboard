import React, { useState } from 'react';
import { ReactComponent as Characters } from '../../assets/characters.svg';
import { ReactComponent as Words } from '../../assets/words.svg';
import { Definitions, IDefinitionKey } from '../Definitions';
import { KeyboardOptions } from './KeyboardUtils';
import { Keys } from '../Keys';
import { ELanguage, Languages } from '../Languages';
import { Menus, TMenuState } from '../Menus';
import { Output, TMessageState } from '../Output';
import { Search } from '../Search';
import { Translations } from '../Translations';
import './Keyboard.css';

export const Keyboard = (options: KeyboardOptions) => {
  const [languageState, setLanguageState] = useState<ELanguage>(options.defaultLanguage);
  const [menuState, setMenuState] = useState<TMenuState>({ menuKey: 1000, diacriticKey: 0 });
  const [messageState, setMessageState] = useState<TMessageState>([]);
  const [hoveredKey, setHoveredKey] = useState<IDefinitionKey | undefined>(undefined);

  return (
    <div id={'appWrapper'}>
      <Characters height={0} width={0} />
      <Words height={0} width={0} />
      {options.output && <Output messageState={messageState} />}
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
