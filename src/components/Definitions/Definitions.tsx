import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { TDefinitionsProps } from './DefinitionsUtils';
import { ELanguage } from '../Languages';
import { getMenuName } from '../Menus';
import { getRecordById } from '../Translations';
import './Definitions.css';

export const Definitions = (props: TDefinitionsProps): React.ReactElement => {
  const { language, hoveredKey } = props;
  let definition: React.ReactElement = <></>;

  if (hoveredKey && hoveredKey.menuCharacter) {
    let character = '';
    let spacer = '';
    let diacritic = '';

    if (hoveredKey.menuKey === 1000 && hoveredKey.diacriticKey === 0) {
      if (hoveredKey.menuCharacter) {
        character = getRecordById(hoveredKey.menuCharacter)[language];
        if (character === '') {
          character = getRecordById(hoveredKey.menuCharacter)[ELanguage.English];
        }
      } else {
        character = getMenuName(
          { menuKey: hoveredKey.menuCharacter, diacriticKey: hoveredKey.diacriticKey },
          language,
        );
      }
    }

    if (hoveredKey.menuKey > 1000 && hoveredKey.diacriticKey === 0) {
      character = getRecordById(hoveredKey.menuCharacter)[language];
      if (character === '') {
        character = getRecordById(hoveredKey.menuCharacter)[ELanguage.English];
      }
    }

    if (hoveredKey.menuKey > 1000 && hoveredKey.diacriticKey > 0) {
      character = getRecordById(hoveredKey.diacriticKey)[language];
      if (character === '') {
        character = getRecordById(hoveredKey.diacriticKey)[ELanguage.English];
      }
      if (hoveredKey.menuCharacter !== 3333) {
        spacer = ' | ';
        diacritic = getRecordById(hoveredKey.menuCharacter)[language];
        if (character === '') {
          diacritic = getRecordById(hoveredKey.menuCharacter)[ELanguage.English];
        }
      }
    }

    definition = (
      <>
        <span>{character}</span>
        <span className={'definitionsSpacer'}>{spacer}</span>
        <span>{diacritic}</span>
      </>
    );
  }

  return (
    <div id={'definitionsWrapper'}>
      <div className={'definitionsText'}>
        <FontAwesomeIcon className={'definitionsIcon'} icon={faComment} />
        <div className={'definitions'}>{definition}</div>
      </div>
    </div>
  );
};
