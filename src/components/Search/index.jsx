import React from 'react';
import { SearchContext } from '../../App';

import styles from './search.module.scss';

export const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <path d="M13.667 7.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm10.333 5.5c0 2.761-2.238 5-5 5-1.381 0-2.631-.56-3.535-1.464-1.006-1.005-2.048-2.658-3.466-2.658-1.437 0-2.435 1.629-3.464 2.658-.904.904-2.154 1.464-3.535 1.464-2.762 0-5-2.239-5-5 0-2.177 1.399-4.01 3.342-4.696 1.029-.364 3.394-.988 5.394-1.495-.437 2.177 1.235 4.191 3.431 4.191 2.122 0 3.83-1.911 3.438-4.104 1.921.49 4.082 1.065 5.053 1.408 1.943.686 3.342 2.519 3.342 4.696zm-16 0c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3zm14 0c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3zm-1.535-1.354c.324 1.736-.685 2.916-2.146 3.227 1.989.722 3.544-1.71 2.146-3.227zm-14.001 0c.324 1.736-.685 2.916-2.146 3.227 1.989.722 3.544-1.71 2.146-3.227z" />
      </svg>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <svg
          onClick={() => setSearchValue('')}
          className={styles.clearIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"></path>
        </svg>
      )}
    </div>
  );
};

export default Search;
