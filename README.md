# react-bliss-keyboard
An application that renders a keyboard of bliss symbols. The intention is to build
a npm package with typescript and react to allow for the integration of a bliss-keyboard
into projects. Currently, there are roughly 1200 Bliss Characters and 4800 Bliss Words
available.

### Example
Three things are exported from this library: Keyboard (the component), KeyboardOptions 
(the options type) and sizeKeybaord (a function to resize the keyboard to the space available).

```
import { Keyboard, KeyboardOptions, sizeKeyboard } from 'react-bliss-keyboard';

const App = () => {
  const exampleOptions: KeyboardOptions = {
    output: true,
    translation: true,
    search: true,
    numberOfResults: 10,
    menu: true,
    definitions: true,
    languages: true,
    defaultLanguage: ELanguage.English,
    posColours: true,
    keyCharacters: true,
  };
  
  useEffect(() => sizeKeyboard(), []);
  window.addEventListener('resize', () => sizeKeyboard());
  
  return (<Keyboard options={exampleOptions} />);
};
```

### Description
There are 7 key elements to the keyboard, from the bottom up there is the keyboard itself.
Symbols are mapped onto a keyboard which can either be clicked with a mouse or a button
press. Next there is a small display listing the users menu level. A display of the
definition of the hovered over character, and a selection of language which will affect
the language of all related sections. Above that a search selection which not
only searches the characters, but also words and allows the user to add them into their
message. A translations section that displays a one to one translation of the characters
selected. Then finally an output that displays the characters as they are selected.

The symbols are arranged in a three tier menu system. The first menu or a home menu
dictates the overall shape or theme of them objects in the next menu. Examples include
a long vertical line or animals. Then from the second menu you choose the specific
symbol you'd like to pick which leads on to a third menu displaying that specific
symbol with a series of diacritical marks that can be either chose or not from.

Finally clicking on a symbol in the diacritical menu will type the symbol in the
output.

### Options
* translation: (boolean) turns on or off translations below the character output
* search: (boolean) turns on or off the ability to search for characters or words
* numberOfResults: (number) is the number of results returned from a search
* menu: (boolean) turns on or off the display of which menu you are currently in
* definitions: (boolean) turns on or off the display of the definition of characters hovered over
* languages: (boolean) turns on or off the ability to select different languages for the application
* defaultLanguage: (ELanguage) One of 13 languages it currently defaults to English this effects, translations, definitions and search
    * English
    * Swedish
    * Norwegian
    * Finnish
    * Hungarian
    * German
    * Dutch
    * Afrikaans
    * Russian
    * Latvian
    * Polish
    * French
    * Spanish
* posColours: (boolean) turn on or off the display of POS colours on keyboard keys
* keyCharacters: (boolean) turn on or off the display of the corresponding hardware keyboard key on keyboard keys

### Remaining Tasks
* Create an npm library
* Find a more elegant process for character kerning
* Support web accessibility - WCAG 2.0 AAA

### Keyboard Changes/Justification
I started with the bliss-keyboard from owencm:
[https://github.com/owencm/bliss-keyboard](https://github.com/owencm/bliss-keyboard)

This keyboard appears to be arranged roughly by shape. This seems logical as
bliss symbols appear to be derived from common shapes. The above keyboard however, does
not include all the symbols, and it had a habit of including symbols twice if it
made sense in multiple locations. I removed the duplicates and included all missing
symbols.

I considered breaking up the symbols by the POS colours, but the distribution of the
colour types are very uneven across the characters.

The keyboard layout was appropriated from this work by Gregory Schier:
[https://codepen.io/gschier/pen/VKgyaY](https://codepen.io/gschier/pen/VKgyaY)

