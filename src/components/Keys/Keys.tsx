import React, { useEffect } from 'react';
import { buildKeys, keyDownHandler, keyUpHandler, TKeysProps } from './KeysUtils';
import './Keys.css';

export const Keys = (props: TKeysProps): React.ReactElement => {
  const { language, menu, message, posColours, keyCharacters, setHoveredKey } = props;

  useEffect(() => {
    const keyDownHandlerWrapper = (e: KeyboardEvent) => keyDownHandler(e, menu, message);

    document.body.addEventListener('keydown', keyDownHandlerWrapper);
    document.body.addEventListener('keyup', keyUpHandler);
    return () => {
      document.body.removeEventListener('keydown', keyDownHandlerWrapper);
      document.body.removeEventListener('keyup', keyUpHandler);
    };
  }, [menu.menuState]);

  return (
    <div id={'keysWrapper'}>
      {buildKeys(language, menu, message, posColours, keyCharacters, setHoveredKey)}
    </div>
  );
};
