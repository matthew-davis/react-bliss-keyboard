import React from 'react';
import { TMenuState } from '../Menus';

// Types
export type TMessageState = TMenuState[];

export type TOutputProps = {
  messageState: TMessageState;
};

// Utils
export const typeCharacters = (messageState: TMenuState[]): JSX.Element[] => {
  return messageState.map((x: TMenuState, index: number) => {
    const messageClass = `messageResult ${
      x.group === 'word' ? 'messageResultWord' : 'messageResultCharacter'
    }`;

    return (
      <div key={index} className={messageClass}>
        <svg className={'messageSvg'} fill={'#111'}>
          <use href={`#${x.menuKey.toString()}`} />
          <use href={`#${x.diacriticKey.toString()}`} />
        </svg>
      </div>
    );
  });
};
