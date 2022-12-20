import React, { useEffect } from 'react';
import { TOutputProps, typeCharacters } from './OutputUtils';
import './Output.css';

export const Output = (props: TOutputProps): React.ReactElement => {
  const { messageState } = props;

  useEffect(() => {
    let show = 'visible';
    const time = 700;
    const cursor: HTMLElement | null = document.getElementById('cursor');

    const cursorBlink = (): void => {
      show = show === 'hidden' ? 'visible' : 'hidden';
      cursor && (cursor.style.visibility = show);
      setTimeout(cursorBlink, time);
    };

    cursorBlink();
  }, []);

  return (
    <div id={'outputWrapper'}>
      <div className={'output'}>
        <div className={'outputCharacters'}>{typeCharacters(messageState)}</div>
        <div id={'cursor'}>&nbsp;</div>
      </div>
    </div>
  );
};
