import React from 'react';
import English from '../../assets/flags/gb.svg';
import Swedish from '../../assets/flags/se.svg';
import Norwegian from '../../assets/flags/no.svg';
import Finnish from '../../assets/flags/fi.svg';
import Hungarian from '../../assets/flags/hu.svg';
import German from '../../assets/flags/de.svg';
import Dutch from '../../assets/flags/nl.svg';
import Afrikaans from '../../assets/flags/za.svg';
import Russian from '../../assets/flags/ru.svg';
import Latvian from '../../assets/flags/lv.svg';
import Polish from '../../assets/flags/pl.svg';
import French from '../../assets/flags/fr.svg';
import Spanish from '../../assets/flags/es.svg';
import { ELanguage, TLanguagesProps } from './LanguagesUtils';
import './Languages.css';

export const Languages = (props: TLanguagesProps): React.ReactElement => {
  const { language } = props;

  return (
    <div id={'languagesWrapper'}>
      <div
        id={ELanguage.English}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.English && 'active'}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.English)?.focus();
        }}
      >
        <img src={English} alt="English" height={'100%'} onClick={() => language.setLanguageState(ELanguage.English)} />
      </div>
      <div
        id={ELanguage.Swedish}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Swedish && 'active'}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Swedish)?.focus();
        }}
      >
        <img src={Swedish} alt="Swedish" height={'100%'} onClick={() => language.setLanguageState(ELanguage.Swedish)} />
      </div>
      <div
        id={ELanguage.Norwegian}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Norwegian && 'active'}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Norwegian)?.focus();
        }}
      >
        <img src={Norwegian} alt="Norwegian" height={'100%'} onClick={() => language.setLanguageState(ELanguage.Norwegian)} />
      </div>
      <div
        id={ELanguage.Finnish}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Finnish && 'active'}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Finnish)?.focus();
        }}
      >
        <img src={Finnish} alt="Finnish" height={'100%'} onClick={() => language.setLanguageState(ELanguage.Finnish)} />
      </div>
      <div
        id={ELanguage.Hungarian}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Hungarian && 'active'}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Hungarian)?.focus();
        }}
      >
        <img src={Hungarian} alt="Hungarian" height={'100%'} onClick={() => language.setLanguageState(ELanguage.Hungarian)} />
      </div>
      <div
        id={ELanguage.German}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.German && 'active'}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.German)?.focus();
        }}
      >
        <img src={German} alt="German" height={'100%'} onClick={() => language.setLanguageState(ELanguage.German)} />
      </div>
      <div
        id={ELanguage.Dutch}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Dutch && 'active'}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Dutch)?.focus();
        }}
      >
        <img src={Dutch} alt="Dutch" height={'100%'} onClick={() => language.setLanguageState(ELanguage.Dutch)} />
      </div>
      <div
        id={ELanguage.Afrikaans}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Afrikaans && 'active'}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Afrikaans)?.focus();
        }}
      >
        <img src={Afrikaans} alt="Afrikaans" height={'100%'} onClick={() => language.setLanguageState(ELanguage.Afrikaans)} />
      </div>
      <div
        id={ELanguage.Russian}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Russian && 'active'}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Russian)?.focus();
        }}
      >
        <img src={Russian} alt="Russian" height={'100%'} onClick={() => language.setLanguageState(ELanguage.Russian)} />
      </div>
      <div
        id={ELanguage.Latvian}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Latvian && 'active'}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Latvian)?.focus();
        }}
      >
        <img src={Latvian} alt="Latvian" height={'100%'} onClick={() => language.setLanguageState(ELanguage.Latvian)} />
      </div>
      <div
        id={ELanguage.Polish}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Polish && 'active'}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Polish)?.focus();
        }}
      >
        <img src={Polish} alt="Polish" height={'100%'} onClick={() => language.setLanguageState(ELanguage.Polish)} />
      </div>
      <div
        id={ELanguage.French}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.French && 'active'}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.French)?.focus();
        }}
      >
        <img src={French} alt="French" height={'100%'} onClick={() => language.setLanguageState(ELanguage.French)} />
      </div>
      <div
        id={ELanguage.Spanish}
        tabIndex={-1}
        className={`flags ${language.languageState === ELanguage.Spanish && 'active'}`}
        onClick={(event) => {
          event.preventDefault();
          document.getElementById(ELanguage.Spanish)?.focus();
        }}
      >
        <img src={Spanish} alt="Spanish" height={'100%'} onClick={() => language.setLanguageState(ELanguage.Spanish)} />
      </div>
    </div>
  );
};
