import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { drawSearchResults, onSubmit, TSearchProps, TSearchResults } from './SearchUtils';
import './Search.css';

export const Search = (props: TSearchProps): React.ReactElement => {
  const { language, numberOfResults, menu, setHoveredKey, message } = props;
  const [searchResults, setSearchResults] = useState<TSearchResults[]>([]);

  return (
    <div id={'searchWrapper'}>
      <div className={'searchFunctionsWrapper'}>
        <form
          id={'searchForm'}
          className={'searchInput'}
          onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
            onSubmit(event, language, setSearchResults, numberOfResults)
          }
        >
          <input id={'search'} type={'search'} placeholder={'Search...'} name={'search'} />
          <button type='submit'>
            <FontAwesomeIcon className={'searchIcon'} icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className={'searchOutput'}>
          {drawSearchResults({ searchResults, setSearchResults }, menu, setHoveredKey, message)}
        </div>
      </div>
      <hr />
    </div>
  );
};
