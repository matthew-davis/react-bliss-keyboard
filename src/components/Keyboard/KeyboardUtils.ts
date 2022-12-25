import { ELanguage } from '../Languages';

// Types
export type KeyboardOptions = {
  output: boolean;
  translation: boolean;
  search: boolean;
  numberOfResults: number;
  menu: boolean;
  definitions: boolean;
  languages: boolean;
  defaultLanguage: ELanguage;
  posColours: boolean;
  keyCharacters: boolean;
};

// Utils
export const sizeKeyboard = (): void => {
  const keyboard: HTMLElement | null = document.getElementById('keysWrapper');
  if (keyboard) {
    if (keyboard.parentElement?.clientWidth) {
      keyboard.style.fontSize = `${keyboard.parentElement.clientWidth / 55}px`;
    }
  }
};
