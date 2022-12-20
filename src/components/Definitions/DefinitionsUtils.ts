import { ELanguage } from '../Languages';
import { TMenuState } from '../Menus';

// Types
export type TDefinitionsProps = {
  language: ELanguage;
  hoveredKey: IDefinitionKey | undefined;
};

export interface IDefinitionKey extends TMenuState {
  menuCharacter: number | null;
}
