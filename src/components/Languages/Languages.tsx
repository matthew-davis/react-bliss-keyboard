import React from 'react';
import { ReactComponent as English } from '../../assets/flags/gb.svg';
import { ReactComponent as Swedish } from '../../assets/flags/se.svg';
import { ReactComponent as Norwegian } from '../../assets/flags/no.svg';
import { ReactComponent as Finnish } from '../../assets/flags/fi.svg';
import { ReactComponent as Hungarian } from '../../assets/flags/hu.svg';
import { ReactComponent as German } from '../../assets/flags/de.svg';
import { ReactComponent as Dutch } from '../../assets/flags/nl.svg';
import { ReactComponent as Afrikaans } from '../../assets/flags/za.svg';
import { ReactComponent as Russian } from '../../assets/flags/ru.svg';
import { ReactComponent as Latvian } from '../../assets/flags/lv.svg';
import { ReactComponent as Polish } from '../../assets/flags/pl.svg';
import { ReactComponent as French } from '../../assets/flags/fr.svg';
import { ReactComponent as Spanish } from '../../assets/flags/es.svg';
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
        <English height={'100%'} onClick={() => language.setLanguageState(ELanguage.English)} />
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
        <Swedish height={'100%'} onClick={() => language.setLanguageState(ELanguage.Swedish)} />
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
        <Norwegian height={'100%'} onClick={() => language.setLanguageState(ELanguage.Norwegian)} />
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
        <Finnish height={'100%'} onClick={() => language.setLanguageState(ELanguage.Finnish)} />
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
        <Hungarian height={'100%'} onClick={() => language.setLanguageState(ELanguage.Hungarian)} />
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
        <German height={'100%'} onClick={() => language.setLanguageState(ELanguage.German)} />
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
        <Dutch height={'100%'} onClick={() => language.setLanguageState(ELanguage.Dutch)} />
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
        <Afrikaans height={'100%'} onClick={() => language.setLanguageState(ELanguage.Afrikaans)} />
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
        <Russian height={'100%'} onClick={() => language.setLanguageState(ELanguage.Russian)} />
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
        <Latvian height={'100%'} onClick={() => language.setLanguageState(ELanguage.Latvian)} />
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
        <Polish height={'100%'} onClick={() => language.setLanguageState(ELanguage.Polish)} />
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
        <French height={'100%'} onClick={() => language.setLanguageState(ELanguage.French)} />
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
        <Spanish height={'100%'} onClick={() => language.setLanguageState(ELanguage.Spanish)} />
      </div>
    </div>
  );
};
